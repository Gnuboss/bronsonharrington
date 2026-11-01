// Favicon drawn from the current palette, so it changes with each edition.
import { palette } from '../config/palette.mjs';

export function GET() {
  const { ink, accent } = palette.roles;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="${ink}"/><text x="8" y="22" font-family="monospace" font-size="16" fill="${accent}">_</text></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
}
