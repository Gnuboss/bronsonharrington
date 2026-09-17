# content-source

Raw copy extracted from the bronson.co.za WordPress export (Divi 5 block JSON, decoded to plain text per page). This is source material for building pages against, not the pages themselves.

Committed to the repo (rather than living only in chat history) so it's always available on a fresh clone - no need to re-upload the WordPress XML export each session.

Files still needing a matching page built in `src/pages/`:
- about-me.md
- 90-day-engagement.md
- seo-consulting.md, technical-seo-audit.md, seo-recovery.md, fractional-growth-leadership.md, ai-visibility-optimization.md, growth-strategy.md, topical-authority-development.md, content-strategy.md, brand-strategy.md, website-strategy.md
- foundations.md, growth-phase.md, domination.md (content already folded into the single `/framework/` page - kept here for reference only, not slated for separate pages)

Already built: home.md -> index.astro, contact-me.md -> contact.astro, framework.md -> framework.astro, services.md -> (partially, via framework.astro's phase sections)

`projects.md` is explicitly NOT a migration source - it's from a legacy build Bronson hasn't reintegrated. The new Projects page will be built fresh around Logbook/MyLedger/GhostDeck, not from this file.
