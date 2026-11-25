import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

// Last-modified dates for the sitemap: each field note and guide uses its own
// `updated` (or `date`) from frontmatter; every other page uses the build date.
const datesFor = (dir, urlPrefix) =>
  readdirSync(`./src/content/${dir}`)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm = readFileSync(`./src/content/${dir}/${f}`, 'utf8').split('---')[1] ?? '';
      const pick = (k) => fm.match(new RegExp(`^${k}:\\s*['"]?([0-9-]{10})`, 'm'))?.[1];
      return [`https://bronson.co.za/${urlPrefix}/${f.replace(/\.md$/, '')}/`, pick('updated') ?? pick('date')];
    });
const noteDates = Object.fromEntries([...datesFor('notes', 'notes'), ...datesFor('guides', 'solutions')]);

// Static pages: the date of the last commit that touched the page file or the
// data files it imports (shared layout and styling changes don't count).
// Needs full git history, so CI checks out with fetch-depth: 0.
const gitDate = (files) => {
  try {
    const out = execSync(`git log -1 --format=%cI -- ${files.join(' ')}`, { encoding: 'utf8' }).trim();
    return out ? new Date(out).toISOString() : undefined;
  } catch { return undefined; }
};
const pageDate = (url) => {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '') || 'index';
  const file = `src/pages/${path}.astro`;
  if (!existsSync(file)) return undefined;
  const data = [...readFileSync(file, 'utf8').matchAll(/from ['"]\.\.\/data\/([\w-]+)['"]/g)].map((m) => `src/data/${m[1]}.ts`);
  return gitDate([file, ...data]);
};

export default defineConfig({
  site: 'https://bronson.co.za/',
  base: '/',
  output: 'static',
  // Inline the (tiny) stylesheets so none block the first paint
  build: { inlineStylesheets: 'always' },
  // The thank-you page is a conversion step, not content: kept out of the sitemap
  integrations: [
    sitemap({
      // Conversion and print-source pages aren't content: kept out
      filter: (page) => !page.includes('/thanks/') && !page.includes('/pdf-source/') && !page.includes('/lab/grid/') && !page.includes('/preview/'),
      // The sitemap tool only sees pages, so the PDF is listed by hand
      customPages: ['https://bronson.co.za/downloads/growth-architect-costa-rica-bronson-harrington.pdf'],
      serialize: (item) => ({ ...item, lastmod: noteDates[item.url] ? new Date(noteDates[item.url]).toISOString() : pageDate(item.url) }),
    }),
  ],
  // Old URLs kept working after content moved. GitHub Pages has no server
  // redirects, so Astro writes a small page with a meta refresh + canonical.
  redirects: {
    '/about/': '/about-me/',
  },
});
