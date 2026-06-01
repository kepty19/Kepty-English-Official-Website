/**
 * Black-background key for hero-tech-visual.png → RGBA cutout (no blend tint).
 * Run: node scripts/make-hero-cutout.mjs
 */
import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'src/hero-tech-visual.png');
const out = path.join(root, 'src/hero-tech-visual-cutout.png');

function crc32(buf) {
  let c = 0xffffffff;
  const table = crc32._t || (crc32._t = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c;
    }
    return t;
  })());
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function unfilter(raw, width, height, bpp) {
  const stride = width * bpp;
  const out = Buffer.alloc(height * stride);
  let rawOff = 0;
  let outOff = 0;
  const prev = Buffer.alloc(stride);
  for (let y = 0; y < height; y++) {
    const filter = raw[rawOff++];
    for (let x = 0; x < stride; x++) {
      const cur = raw[rawOff++];
      let val;
      const a = x >= bpp ? out[outOff + x - bpp] : 0;
      const b = prev[x];
      const c = x >= bpp ? prev[x - bpp] : 0;
      switch (filter) {
        case 0: val = cur; break;
        case 1: val = (cur + a) & 0xff; break;
        case 2: val = (cur + b) & 0xff; break;
        case 3: val = (cur + ((a + b) >> 1)) & 0xff; break;
        case 4: val = (cur + paeth(a, b, c)) & 0xff; break;
        default: val = cur;
      }
      out[outOff + x] = val;
      prev[x] = val;
    }
    outOff += stride;
  }
  return out;
}

function filterScanlines(rgba, width, height) {
  const stride = width * 4;
  const raw = [];
  for (let y = 0; y < height; y++) {
    raw.push(0); // None — safest PNG encode
    const row = rgba.subarray(y * stride, (y + 1) * stride);
    for (let x = 0; x < stride; x++) raw.push(row[x]);
  }
  return Buffer.from(raw);
}

function readPng(file) {
  const buf = fs.readFileSync(file);
  if (buf.toString('hex', 0, 8) !== '89504e470d0a1a0a') throw new Error('Not PNG');
  let pos = 8;
  let width, height, colorType;
  const idats = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      colorType = data[9];
      if (colorType !== 2 && colorType !== 6) throw new Error(`Unsupported color type ${colorType}`);
    } else if (type === 'IDAT') idats.push(data);
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idats));
  const bpp = colorType === 6 ? 4 : 3;
  const rgb = unfilter(raw, width, height, bpp);
  return { width, height, colorType, rgb, bpp };
}

/** Only remove near-pure black matte; keep dark phone/ball surfaces */
function keyAlpha(r, g, b) {
  if (r <= 10 && g <= 10 && b <= 10) return 0;
  if (r <= 22 && g <= 22 && b <= 22) {
    const t = Math.max(r, g, b) / 22;
    return Math.round(255 * t * t * t);
  }
  return 255;
}

function writeRgbaPng(width, height, rgba, dest) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const filtered = filterScanlines(rgba, width, height);
  const idat = zlib.deflateSync(filtered, { level: 9 });
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
  fs.writeFileSync(dest, png);
}

const { width, height, rgb, bpp } = readPng(src);
const rgba = Buffer.alloc(width * height * 4);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const si = (y * width + x) * bpp;
    const di = (y * width + x) * 4;
    const r = rgb[si];
    const g = rgb[si + 1];
    const b = rgb[si + 2];
    rgba[di] = r;
    rgba[di + 1] = g;
    rgba[di + 2] = b;
    rgba[di + 3] = keyAlpha(r, g, b);
  }
}
writeRgbaPng(width, height, rgba, out);
console.log(`Wrote ${out} (${width}x${height})`);
