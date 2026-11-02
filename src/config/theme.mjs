// Turns the five palette roles into every colour token the site uses.
// Derived tones are mixes of ink and paper, computed here at build time
// (plain hex out), so the contrast check and the site always agree.

const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
};
const rgbToHex = (rgb) =>
  '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase();

// Weight `amount` of colour a into colour b (sRGB, like CSS color-mix in srgb)
export const mix = (a, b, amount) => {
  const [ra, rb] = [hexToRgb(a), hexToRgb(b)];
  return rgbToHex(ra.map((v, i) => v * amount + rb[i] * (1 - amount)));
};

const luminance = (hex) => {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const contrast = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// Shift fg toward `toward` in small steps until it reaches `min` contrast on bg.
// Returns the original colour untouched when it already passes.
export function ensureContrast(fg, bg, min, toward) {
  if (contrast(fg, bg) >= min) return fg;
  for (let t = 0.02; t <= 1; t += 0.02) {
    const c = mix(toward, fg, t);
    if (contrast(c, bg) >= min) return c;
  }
  return toward;
}

// Records palette colours that were nudged for readability (shown by palette:check)
export const adjustments = [];

export function buildTokens({ roles }) {
  const { paper, ink, rule, highlight } = roles;
  adjustments.length = 0;
  const fix = (name, colour, min) => {
    const out = ensureContrast(colour, paper, min, ink);
    if (out !== colour.toUpperCase() && out !== colour) adjustments.push({ name, from: colour, to: out, min });
    return out;
  };
  // Accent is used for text (links, eyebrows), so it must reach 4.5:1.
  const accent = fix('accent', roles.accent, 4.5);
  return {
    '--paper': paper,
    '--paper-dim': mix(ink, paper, 0.07), // code backgrounds, subtle fills
    '--ink': ink,
    '--ink-soft': fix('ink-soft', mix(ink, paper, 0.85), 4.5), // body copy
    '--ink-muted': fix('ink-muted', mix(ink, paper, 0.72), 4.5), // secondary copy
    '--ink-faint': fix('ink-faint', mix(ink, paper, 0.6), 4.5), // small mono labels and dates
    '--hairline': mix(ink, paper, 0.14), // 0.5px dividers
    '--accent': accent,
    '--accent-dim': mix(accent, paper, 0.15),
    // Rules and the focus ring are graphics, not text: 3:1 is the bar.
    '--rule-strong': fix('rule', rule, 3),
    '--highlight': fix('highlight', highlight, 3),
    '--ink-rgb': hexToRgb(ink).join(', '), // for the edge-shading vignette
    '--grid-dot': mix(ink, paper, 0.1), // resting pixels in the background grid
    '--accent-rgb': hexToRgb(accent).join(', '), // background spotlight glow
  };
}

// Text/background pairs that actually appear on the site.
// AA: 4.5 for normal text. Hairlines are decorative, so not checked.
export function contrastChecks(tokens) {
  const t = tokens;
  return [
    { pair: 'ink on paper (headings)', fg: t['--ink'], bg: t['--paper'], min: 4.5 },
    { pair: 'ink-soft on paper (body copy)', fg: t['--ink-soft'], bg: t['--paper'], min: 4.5 },
    { pair: 'ink-muted on paper (secondary copy)', fg: t['--ink-muted'], bg: t['--paper'], min: 4.5 },
    { pair: 'ink-faint on paper (labels, dates)', fg: t['--ink-faint'], bg: t['--paper'], min: 4.5 },
    { pair: 'accent on paper (links, eyebrows)', fg: t['--accent'], bg: t['--paper'], min: 4.5 },
    { pair: 'ink on paper-dim (inline code)', fg: t['--ink'], bg: t['--paper-dim'], min: 4.5 },
    { pair: 'paper on ink (code blocks)', fg: t['--paper'], bg: t['--ink'], min: 4.5 },
    { pair: 'highlight vs paper (focus ring)', fg: t['--highlight'], bg: t['--paper'], min: 3 },
    { pair: 'rule vs paper (heavy rules)', fg: t['--rule-strong'], bg: t['--paper'], min: 3 },
  ].map((c) => ({ ...c, ratio: contrast(c.fg, c.bg) }));
}

export const toCss = (tokens) =>
  ':root{' + Object.entries(tokens).map(([k, v]) => `${k}:${v}`).join(';') + '}';
