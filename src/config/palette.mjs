// ============================================================
// SITE PALETTE: the only file to edit when the colours change.
//
// Each palette gets an edition number, a name, and the coolors.co
// link it came from. The five roles below are all the site needs;
// every lighter/darker tone (muted text, hairlines, tints) is
// generated from them in src/config/theme.mjs.
//
//   paper      page background
//   ink        headings and body text
//   accent     links, eyebrow labels, hovers
//   rule       heavy 2px rules above cards and lists
//   highlight  side rules on quotes and callouts, keyboard focus ring
//
// `npm run palette:check` (also run before every build) checks the
// combinations readers actually see against WCAG AA contrast and
// stops the build if any of them would be hard to read.
// ============================================================

export const palette = {
  edition: '01',
  name: 'Swiss Terminal',
  source: '', // coolors.co link, when the palette came from one
  date: '2026-11-01', // when this edition went live
  swatches: ['#F7F6F2', '#141414', '#2E6F5C'],
  // Type pairing for this edition (recorded for the style tile; the site's
  // font files and stacks live in public/fonts and src/styles/tokens.css)
  fonts: {
    display: 'Inter',
    body: 'Inter',
    mono: 'JetBrains Mono',
  },
  roles: {
    paper: '#F7F6F2',
    ink: '#141414',
    accent: '#2E6F5C',
    rule: '#141414',
    highlight: '#2E6F5C',
  },
};

// Previous editions, kept for reference and easy rollback:
// copy one back into `palette` above to restore it.
export const history = [];

// Look up any edition, current or past, by its number (e.g. '01').
// Used by style tiles so an old Field Note keeps showing its own palette.
export const getEdition = (edition) =>
  [palette, ...history].find((p) => p.edition === edition);
