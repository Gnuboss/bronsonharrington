# Page Standards

## Design decision principle

Every visual or layout choice needs a stated functional justification before it ships - usability, page speed, SEO/AEO, accessibility, or genuine brand-signal reinforcement (e.g. the CRT vignette exists because it reinforces the Swiss/e-reader positioning at zero performance cost, not because it looks nice). "It looks more interesting" is not sufficient on its own.

Corollary: **layout variation must be motivated by the content, not applied as decoration.** A set of genuine peer items (services in a category, qualifier cards) stays in a uniform grid. Asymmetry is earned only when the content itself is structurally different - a sequence, a hierarchy that actually exists, or items with genuinely different weight. Don't create visual hierarchy that isn't backed by real informational hierarchy.

Applied to this build:
- Framework section uses a diagram, not uniform cards, because Foundations to Growth to Domination is a real sequence, not three peer items.
- Competencies stays a uniform 4-column grid because the four categories are genuine peers.
- Testimonials use natural content height rather than forced-equal height, since the quotes are genuinely different lengths.
- The CRT frame vignette is fixed-position, zero-image, `pointer-events: none`, and `aria-hidden` - it reinforces the paper/e-reader read without adding weight, blocking interaction, or confusing screen readers.

Applied to every page in this project before it ships. Not aspirational - checked against on every build.

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
- [ ] Heading hierarchy is a perfect, unbroken sequence: H1 (once, page title) &#8594; H2 (major section headers) &#8594; H3 (sub-sections / component titles within a section) &#8594; H4 (finer detail within a subsection) &#8594; H5 (one-liners). Never skip a level. Small taxonomic labels (category tags, form field labels) don't need heading tags at all - only things that belong in the actual document outline get one.

## Forms

Every form on the site is `src/components/ContactForm.astro` (variants: `full`, `compact`), built to the lead form standard. New forms reuse it rather than starting over. The rules:

- **Button names the outcome, not the action.** Never "Submit" or "Send". Each topic carries its own label (`src/data/contact.ts`), and pages that imply a topic pre-select it.
- **Ask only for what the reply needs.** Name and email required; everything else optional and labelled "optional". Optional extras sit behind dashed add-on buttons, and hidden content is never sent.
- **Validation:** nothing red before interaction or while a field is being typed the first time; errors appear on leaving the field or on submit, then re-check as the visitor types. Valid and error states always carry an icon, never colour alone. Error copy says what to do ("Enter your name").
- **The button is never disabled.** A blocked submit shows every error and focuses the first. Sending shows a spinner and locks against double taps. A failure keeps everything typed and offers email as a fallback.
- **Inputs:** 44px minimum, 16px text (no iOS zoom), correct `type` / `inputmode` / `autocomplete`. Primary action is the tallest element (52px).
- **Promise only what's true.** The response line under the button must match how fast replies actually happen.
- **Spam:** honeypot, not CAPTCHA.
- **Measure it:** `form_start`, `field_complete`, `submit_attempt`, `form_error`, `submit_failed`, `form_submit`, each with `form_location`, and a unique thank-you URL per form (`/thanks/?src=`).
- Works without JavaScript: native required checks, plain POST, same thank-you page.

## Layout

One grid, one spine, a few named layouts. Variety comes from how content spans the columns, never from a new ratio invented for one page. The live specimen is `/lab/grid/` (Shift+G shows the grid on any page that includes the overlay); the CSS is `src/styles/grid.css`, loaded on every page.

**The grid.** 12 columns on desktop, 8 on tablet, 4 on phone, 24px gutter. Spans are written in 12ths (`.s-4`, `.s-6`…) and fold down by rule. Breakpoints are 720px and 980px only; don't add others.

**The baseline.** 8px. Body line height is 24px; spacing tokens are multiples of 8.

**The spine (hang).** Every page hangs its labels in a margin column: 3 of 12 on desktop, 2 of 8 on tablet, stacked above on phone. Eyebrows, dates, keys and questions go in `.hang-label`; titles and text go in `.hang-body` (8 columns, leaving one empty on the right). Text is never wider than that span.

**Building blocks.**
- `PageHero` opens every page: eyebrow in the margin, title block with the signature vertical rule in the gutter.
- `Section` is every band after that: eyebrow and title on the hang, optional intro and "more" link, then the content. Sections are separated by `<hr class="hairline" />`.

**Named layouts, chosen by what the content is:**

| Content | Layout | Class |
|---|---|---|
| Dated or keyed sequence (notes, roles, steps, Q&A) | Rows on the hang split | `.rows` + `.hang` |
| Genuine peers (projects, testimonials, disciplines) | Uniform cards, one span for all | `.g` + `.card.s-3/4/6` |
| A real progression (Foundations → Growth → Domination) | Staircase | `.g.stair` |
| Parameters, contact details, specs | Spec sheet | `.spec` |
| Problems leading to solutions | Menu board with dotted leaders | `.menu` |
| A catalogue of capabilities | Pantry index | `.pantry` |
| One sourced number | Figure | `.figure-num` beside `.s-8` |
| Long-form writing | Prose in the content columns | `.hang-body.prose` |

Don't mix spans within a row of peers, don't use the staircase for things that aren't a sequence, and don't put a figure on a number without a source.
