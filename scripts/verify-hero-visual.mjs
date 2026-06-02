/**
 * Validates hero visual setup — run via npm run lint
 */
import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const component = fs.readFileSync(
  path.join(root, 'src/components/HeroTechVisual.tsx'),
  'utf8',
);
const asset = path.join(root, 'src/hero-tech-visual.png');
const errors = [];

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}

function unfilter(raw, w, h, bpp) {
  const stride = w * bpp;
  const out = Buffer.alloc(h * stride);
  let ro = 0, oo = 0;
  const prev = Buffer.alloc(stride);
  for (let y = 0; y < h; y++) {
    const f = raw[ro++];
    for (let x = 0; x < stride; x++) {
      const cur = raw[ro++];
      const a = x >= bpp ? out[oo + x - bpp] : 0;
      const b = prev[x];
      const c = x >= bpp ? prev[x - bpp] : 0;
      let v;
      switch (f) {
        case 0: v = cur; break;
        case 1: v = (cur + a) & 255; break;
        case 2: v = (cur + b) & 255; break;
        case 3: v = (cur + ((a + b) >> 1)) & 255; break;
        case 4: v = (cur + paeth(a, b, c)) & 255; break;
        default: v = cur;
      }
      out[oo + x] = v;
      prev[x] = v;
    }
    oo += stride;
  }
  return out;
}

function inspectPngAlpha(file) {
  const buf = fs.readFileSync(file);
  let pos = 8, w, h, ct, idats = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      w = data.readUInt32BE(0);
      h = data.readUInt32BE(4);
      ct = data[9];
    }
    if (type === 'IDAT') idats.push(data);
    pos += 12 + len;
  }
  if (ct !== 6) return { total: w * h, transparent: 0, checkerLike: 0 };
  const px = unfilter(zlib.inflateSync(Buffer.concat(idats)), w, h, 4);
  let transparent = 0, checkerLike = 0;
  const total = w * h;
  for (let i = 0; i < total; i++) {
    const o = i * 4;
    const r = px[o], g = px[o + 1], b = px[o + 2], a = px[o + 3];
    if (a < 10) transparent++;
    const spread = Math.max(r, g, b) - Math.min(r, g, b);
    const avg = (r + g + b) / 3;
    if (a > 200 && spread < 10 && avg >= 186 && avg <= 255) checkerLike++;
  }
  return { total, transparent, checkerLike };
}

if (!fs.existsSync(asset)) {
  errors.push('Missing src/hero-tech-visual.png');
} else {
  const buf = fs.readFileSync(asset);
  if (buf.length >= 26 && buf[25] !== 6) {
    errors.push('hero-tech-visual.png must be RGBA. Run: node scripts/prepare-hero-asset.mjs');
  }
  try {
    const stats = inspectPngAlpha(asset);
    if (stats.transparent < stats.total * 0.15) {
      errors.push(
        `Almost no transparency in hero-tech-visual.png — checkerboard export? See docs/HERO_VISUAL.md`,
      );
    }
    if (stats.checkerLike > stats.total * 0.05) {
      errors.push('Checkerboard pixels detected in hero-tech-visual.png — run prepare-hero-asset.mjs');
    }
  } catch {
    errors.push('Could not read hero-tech-visual.png');
  }
}

if (/from ['"].*cutout|mix-blend/.test(component)) {
  errors.push('Hero must not use cutout files or CSS blend modes.');
}

if (component.includes('motion/') || component.includes('motion/react')) {
  errors.push('Hero must not use Framer Motion on the positioned node.');
}

if (!component.includes('hero-tech-visual.png')) {
  errors.push('Import src/hero-tech-visual.png only.');
}

if (!/zIndex:\s*2|z-\[2\]/.test(component)) {
  errors.push('Hero visual zIndex must be 2 (behind ghost text).');
}

if (errors.length) {
  console.error('verify-hero-visual FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify-hero-visual OK');
