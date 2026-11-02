// Builds shown on the home page (and later, the Lab page).
// Add or reorder entries here; every page that lists projects reads from this file.
export interface Project {
  name: string;
  summary: string;
  stack: string;
  href: string;
  linkLabel: string;
}

export const projects: Project[] = [
  {
    name: 'Logbook',
    summary:
      'A job application tracker built after one too many broken applicant tracking systems. Fully accessible, works offline, with import/export and an agent-readable data layer.',
    stack: 'single-file html · localStorage',
    href: 'https://gnuboss.github.io/logbook-job-tracker/',
    linkLabel: 'open logbook',
  },
  {
    name: 'MyLedger',
    summary:
      'Local-first invoicing. Quotes convert to invoices, invoices export to PDF, and the data never leaves your browser.',
    stack: 'single-file html · localStorage',
    href: 'https://github.com/Gnuboss/myledger',
    linkLabel: 'view on github',
  },
  {
    name: 'GhostDeck',
    summary: 'A retro-styled media control surface for macOS.',
    stack: 'node.js · express',
    href: 'https://github.com/Gnuboss/ghostdeck',
    linkLabel: 'view on github',
  },
  {
    name: 'Tarot Slot Machine',
    summary: 'A tarot card of the day, drawn slot-machine style, built for Misterio Studios.',
    stack: 'html · css · js',
    href: 'https://tarot.bronson.co.za/',
    linkLabel: 'play it',
  },
];

// Site experiments: things built into this site to try an idea out.
// Shown in their own section on the Lab page (the home page lists builds only).
export const experiments: (Project & { note?: string })[] = [
  {
    name: 'Vertical Scroller',
    summary:
      'An SVG parallax ocean you dive through as you scroll, telling Growth OS from the surface down to the seabed it stands on. Seven layers, a depth-gauge HUD, palette-driven colours.',
    stack: 'svg · css · parallax',
    href: '/lab/scroller/',
    linkLabel: 'dive in',
    note: '/notes/vertical-scroller-parallax-experiment/',
  },
];
