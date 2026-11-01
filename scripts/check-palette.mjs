// Prints the current palette's tokens and contrast results.
// Exits with an error (stopping the build) if any text pair fails WCAG AA.
import { palette } from '../src/config/palette.mjs';
import { buildTokens, contrastChecks, adjustments } from '../src/config/theme.mjs';

const tokens = buildTokens(palette);
const checks = contrastChecks(tokens);

console.log(`\nPalette ${palette.edition}: ${palette.name}${palette.source ? `  (${palette.source})` : ''}\n`);
for (const [k, v] of Object.entries(tokens)) if (k !== '--ink-rgb') console.log(`  ${k.padEnd(14)} ${v}`);
console.log('');
if (adjustments.length) {
  console.log('  Darkened for readability (raw palette colour -> colour used on the site):');
  for (const a of adjustments) console.log(`    ${a.name.padEnd(10)} ${a.from} -> ${a.to}  (to reach ${a.min}:1)`);
  console.log('');
}
let failed = 0;
for (const c of checks) {
  const ok = c.ratio >= c.min;
  if (!ok) failed++;
  console.log(`  ${ok ? 'pass' : 'FAIL'}  ${c.ratio.toFixed(2).padStart(5)}:1  (needs ${c.min})  ${c.pair}`);
}
console.log('');
if (failed) {
  console.error(`${failed} contrast check(s) failed. Ink and paper don't contrast enough to fix automatically: pick a darker ink or lighter paper in src/config/palette.mjs.\n`);
  process.exit(1);
}
