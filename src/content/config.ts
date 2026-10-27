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
    // draft: true keeps a note out of the build entirely
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
