/**
 * Sanity-check hero visual layout (prevents repeat regressions).
 * Run: node scripts/verify-hero-visual.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const component = fs.readFileSync(
  path.join(root, 'src/components/HeroTechVisual.tsx'),
  'utf8',
);

const cutout = path.join(root, 'src/hero-tech-visual-cutout.png');
const errors = [];

if (!fs.existsSync(cutout)) {
  errors.push('Missing src/hero-tech-visual-cutout.png — run: node scripts/make-hero-cutout.mjs');
}

if (!component.includes('hero-tech-visual-cutout.png')) {
  errors.push('Component must import hero-tech-visual-cutout.png (transparent, no black box).');
}

if (component.includes('mix-blend-screen') || component.includes('hero-tech-visual.png')) {
  errors.push('Do not use black-bg PNG or mix-blend-screen (causes solid black panel).');
}

if (!component.includes('hero-tech-visual-anchor')) {
  errors.push('Missing static anchor wrapper for translateX(-50%) scale().');
}

if (/motion\.div[^]*style=\{[^]*transform:\s*`translateX/.test(component)) {
  errors.push('Do not put translateX/scale on motion.div — animate{{y}} overwrites transform.');
}

if (!/zIndex:\s*2/.test(component)) {
  errors.push('Hero visual must use zIndex 2 (behind ghost text z-4).');
}

if (errors.length) {
  console.error('verify-hero-visual FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify-hero-visual OK');
