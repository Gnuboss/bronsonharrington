# bronsonharrington

Personal site: notes, lab, and the Growth OS framework. Astro, zero client-side JS by default, self-hosted fonts, static output for GitHub Pages.

## Design system: "Swiss Terminal"

- Palette: warm paper (#F7F6F2), ink (#141414), muted terminal-green accent (#2E6F5C)
- Type: Inter (display/body) + JetBrains Mono (structural labels, phase markers, file-path eyebrows)
- Layout: Swiss grid discipline, hairline rules, one vertical rule as the signature grid gesture
- Heading hierarchy locked: H1 hero / H3 section / H4 subtitle / H5 one-liner (per Bronson'## Structure

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
