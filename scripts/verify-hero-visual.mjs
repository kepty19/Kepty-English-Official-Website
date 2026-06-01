/**
 * Sanity-check hero anchor math (catches motion transform regressions).
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

const errors = [];

if (component.includes('hero-tech-visual-cutout')) {
  errors.push('Component must not import cutout PNG (use hero-tech-visual.png + mix-blend-screen).');
}

if (!component.includes('hero-tech-visual.png')) {
  errors.push('Component must import hero-tech-visual.png.');
}

if (!component.includes('hero-tech-visual-anchor')) {
  errors.push('Missing static anchor wrapper for translateX(-50%) scale().');
}

if (/motion\.div[^]*style=\{[^]*transform:\s*`translateX/.test(component)) {
  errors.push('Do not put translateX/scale on motion.div — animate{{y}} overwrites transform.');
}

if (!component.includes('mix-blend-screen')) {
  errors.push('Image must use mix-blend-screen on orange hero.');
}

if (errors.length) {
  console.error('verify-hero-visual FAILED:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

console.log('verify-hero-visual OK');
