import { defineCollection, z } from 'astro:content';

// Notes: one markdown file per post in src/content/notes/.
// The filename becomes the URL: my-note.md -> /notes/my-note/
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Optional search title if the page title should differ from the heading (aim for 50-60 characters)
    seoTitle: z.string().optional(),
    // Used as the meta description (aim for 120-155 characters)
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Palette edition number (e.g. '01') to show a style tile at the top of the note
    styleTile: z.string().optional(),
    // draft: true keeps a note out of the build entirely
    draft: z.boolean().default(false),
  }),
});

// Guides: one evergreen breakdown per pain point on /solutions/, in
// src/content/guides/. The filename becomes the URL: my-guide.md -> /solutions/my-guide/
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Search title (50-60 characters); falls back to title + site name
    seoTitle: z.string().optional(),
    // Meta description (120-155 characters)
    description: z.string(),
    // The short answer shown under the H1 (40-60 words): what is usually wrong, what to check first
    answer: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // The pain point this guide answers, worded as on /solutions/
    problem: z.string(),
    // Service code on the services menu (see src/data/services.ts), e.g. 'V05'
    fix: z.string(),
    // Growth OS stage the fix belongs to
    stage: z.enum(['foundations', 'growth', 'domination']),
    // Rendered as visible questions AND as FAQPage schema from the same data
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // Every statistic or claim must link to a page that was opened and read
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      publisher: z.string(),
      date: z.string().optional(),
    })).default([]),
    // draft: true keeps a guide out of the build entirely
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, guides };
