/**
 * Validates hero visual setup — run via npm run lint
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const component = fs.readFileSync(
  path.join(root, 'src/components/HeroTechVisual.tsx'),
  'utf8',
);
const asset = path.join(root, 'src/hero-tech-visual.png');
const errors = [];

if (!fs.existsSync(asset)) {
  errors.push('Missing src/hero-tech-visual.png');
} else {
  const buf = fs.readFileSync(asset);
  if (buf.length >= 26) {
    const colorType = buf[25];
    if (colorType !== 6) {
      errors.push(
        'hero-tech-visual.png must be RGBA (colorType 6). Replace with a transparent PNG — see docs/HERO_VISUAL.md',
      );
    }
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

if (!/zIndex:\s*2/.test(component)) {
  errors.push('Hero visual zIndex must be 2 (behind ghost text).');
}

if (errors.length) {
  console.error('verify-hero-visual FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify-hero-visual OK');
