# bronsonharrington

Client-facing consultancy site. Astro, zero client-side JS by default, self-hosted fonts, static output for GitHub Pages.

## Design system: "Swiss Terminal"

- Palette: warm paper (#F7F6F2), ink (#141414), muted terminal-green accent (#2E6F5C)
- Type: Inter (display/body) + JetBrains Mono (structural labels, phase markers, file-path eyebrows)
- Layout: Swiss grid discipline, hairline rules, one vertical rule as the signature grid gesture
- Heading hierarchy locked: H1 hero / H3 section / H4 subtitle / H5 one-liner (per Bronson's existing convention)

## Status

Scaffolded and building clean:
- [x] Design tokens (`src/styles/tokens.css`)
- [x] Base layout, Header, Footer, PhaseNav component
- [x] Homepage (hero + framework section) using real extracted copy
- [ ] Font files — need Inter and JetBrains Mono variable woff2 binaries in `public/fonts/`
       (self-hosted, subsetted; not fetched yet — network sandbox doesn't reach fonts.gstatic.com,
       pull from Google Fonts or fontsource npm packages directly on your machine)
- [ ] Remaining pages: About, Contact, Services (hub + 12 sub-pages), Framework (hub + 3 phases),
       Projects (net-new, not migrated — see note below)
- [ ] Growth Architect Costa Rica entity page (schema + FAQ reconciliation still pending from earlier audit)
- [ ] Case studies (5, from backlog — not yet written as live pages)
- [ ] CNAME file for custom domain once DNS is ready to point at GitHub Pages

## Content source

All page copy was extracted from the live bronson.co.za WordPress XML export (Divi 5 block JSON,
decoded to clean markdown) — see the `extracted-content/` files shared earlier in this conversation.
Not yet wired into these page components; homepage is the only one built out so far.

## Local dev

```
npm install
npm run dev
```

## Deploy

Static build via `npm run build` → `dist/`. Point GitHub Pages at this repo, add a `CNAME` file
with `bronson.co.za` once ready to cut over from the WordPress hosting.
