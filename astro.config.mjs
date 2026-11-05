import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Last-modified dates for the sitemap: each field note uses its own
// `updated` (or `date`) from frontmatter; every other page uses the build date.
const noteDates = Object.fromEntries(
  readdirSync('./src/content/notes')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm = readFileSync(`./src/content/notes/${f}`, 'utf8').split('---')[1] ?? '';
      const pick = (k) => fm.match(new RegExp(`^${k}:\\s*['"]?([0-9-]{10})`, 'm'))?.[1];
      return [`https://bronson.co.za/notes/${f.replace(/\.md$/, '')}/`, pick('updated') ?? pick('date')];
    })
);
const buildDate = new Date().toISOString();

export default defineConfig({
  site: 'https://bronson.co.za/',
  base: '/',
  output: 'static',
  // The thank-you page is a conversion step, not content: kept out of the sitemap
  integrations: [
    sitemap({
      // Conversion and print-source pages aren't content: kept out
      filter: (page) => !page.includes('/thanks/') && !page.includes('/pdf-source/') && !page.includes('/lab/grid/') && !page.includes('/preview/'),
      // The sitemap tool only sees pages, so the PDF is listed by hand
      customPages: ['https://bronson.co.za/downloads/growth-architect-costa-rica-bronson-harrington.pdf'],
      serialize: (item) => ({ ...item, lastmod: noteDates[item.url] ? new Date(noteDates[item.url]).toISOString() : buildDate }),
    }),
  ],
  // Old URLs kept working after content moved. GitHub Pages has no server
  // redirects, so Astro writes a small page with a meta refresh + canonical.
  redirects: {
    '/about/': '/about-me/',
  },
});
