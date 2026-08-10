# Page Standards

Applied to every page in this project before it ships. Not aspirational — checked against on every build.

## Title tags

- **Source of truth: Bronson's existing Yoast title/description from the WordPress export first.** Pull the actual `_yoast_wpseo_title` / `_yoast_wpseo_metadesc` values for that page before writing anything new. Trim or lightly adjust for length and cross-page uniqueness only — don't invent replacement copy when his original already exists.
- **Length: 50–60 characters.** Google truncates around 60; staying under 55 is safest.
- **Primary keyword near the front.** Not buried after the brand name.
- **Pattern:** `{Primary keyword/service} | {Differentiator or location}` or `{Name} — {Role}, {Location}` for identity pages.
- One title per page. Never reused across pages — each title should be able to stand alone as a unique search result.

## Meta descriptions

- **Length: 120–155 characters.** Hard ceiling 160 — anything longer gets truncated by Google and the sentence reads as cut off, which looks unfinished to a searcher.
- **Includes the primary keyword once**, naturally, not stuffed.
- **Ends with an implicit or explicit action** — what happens if they click through — not just a description of the page's topic.
- Never duplicated across pages.

## Landing page completeness (services, framework, offer pages)

Every page that isn't a pure utility/thank-you page needs all of these present, not just some:

1. **Clear H1** stating what the page is / who it's for, above the fold
2. **Positioning statement** — 1–2 sentences of "why this matters" before diving into features/deliverables
3. **What's included** — concrete deliverables or scope, not vague promises
4. **Proof** — at minimum one of: testimonial, stat, named client/vertical, case study reference. No page asserts expertise without evidence.
5. **Objection handling / qualifier** — who this is for for, and ideally who it's *not* for. Filters better than it sells.
6. **Specific CTA** — tied to that page's intent. A service page pushes toward the 90-Day Engagement or a free audit, not a generic "contact me."
7. **Schema** — matching the page's actual type (Service, FAQPage, Person, etc.), not copy-pasted boilerplate.
8. **Meta title + description**, both within the limits above.

## Pre-ship checklist (run before any page is marked done)

- [ ] All extracted source copy accounted for — used, or deliberately cut with a stated reason
- [ ] Title tag length checked programmatically, not eyeballed
- [ ] Meta description length checked programmatically, not eyeballed
- [ ] At least one proof element present
- [ ] CTA is specific to page intent
- [ ] Schema present and validated (parses as JSON, correct `@type`)
- [ ] Internal links use the `${base}` pattern, not hardcoded root paths
- [ ] Heading hierarchy follows the locked convention: H1 hero / H3 section / H4 subtitle / H5 one-liner
