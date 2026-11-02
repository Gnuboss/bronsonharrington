# bronsonharrington

Personal site: notes, lab, and the Growth OS framework. Astro, zero client-side JS by default, self-hosted fonts, static output for GitHub Pages.

## Design system: "Swiss Terminal"

- Palette: edition 01 "Swiss Terminal": warm paper (#F7F6F2), ink (#141414), muted terminal-green accent (#2E6F5C). See Palette below
- Type: Inter (display/body) + JetBrains Mono (structural labels, phase markers, file-path eyebrows)
- Layout: Swiss grid discipline, hairline rules, one vertical rule as the signature grid gesture
- Heading hierarchy locked: H1 hero / H3 section / H4 subtitle / H5 one-liner (per Bronson'## Palette (periodic reskin)

All colour comes from one file: `src/config/palette.mjs`. Each edition has a number, a name, an optional coolors.co link, and five roles: `paper`, `ink`, `accent`, `rule`, `highlight`. Muted text, hairlines and tints are generated from those (`src/config/theme.mjs`), the favicon is drawn from them, and they're inlined into every page.

To reskin: put the new colours in `palette`, move the old one into `history`, and run `npm run palette:check`. Any colour that would be hard to read is darkened only as far as needed to reach WCAG AA, and the check lists what it changed. The check also runs before every build and stops it only if ink and paper themselves don't contrast enough.

Each edition gets a Field Note with a style tile (after styletil.es): add `styleTile: "02"` to the note's frontmatter and `src/components/StyleTile.astro` renders that edition's swatches, type pairing and core elements at the top of the note, in that edition's own colours. Record the edition's `date` and `fonts` in palette.mjs too. See `src/content/notes/palette-01-swiss-terminal.md` for the pattern.

## Structure

- `/` home: intro, latest notes, builds, framework teaser
- `/notes/` writing. One markdown file per note in `src/content/notes/` (filename = URL; `draft: true` hides it). RSS at `/rss.xml`
- `/lab/` builds, listed from `src/data/projects.ts` (also feeds the home page)
- `/framework/` Growth OS, written as thinking rather than an offer
- `/about-me/`, `/contact/`, `404`
- Redirects (in `astro.config.mjs`): `/growth-architect-costa-rica/` now lives as a note; `/about/` points to `/about-me/`
- Sitemap and robots.txt generated/served automatically

## Status

- [x] Design tokens, layout, header, footer
- [x] Self-hosted fonts (Inter + JetBrains Mono variable, latin subset, from fontsource)
- [x] Home, Notes, Lab, Framework, About, Contact, 404, RSS, sitemap
- [ ] Publish real notes
- [ ] CNAME file for bronson.co.za once DNS points at GitHub Pages

The old consultancy service pages and the 90-Day Engagement were retired when the site stopped being acquisition-focused. Their copy stays in `content-source/` for reference.

 one built out so far.

## Local dev

```
npm install
npm run dev
```

## Deploy

Static build via `npm run build` → `dist/`. Point GitHub Pages at this repo, add a `CNAME` file
with `bronson.co.za` once ready to cut over from the WordPress hosting.
