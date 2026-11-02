import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bronson.co.za/',
  base: '/',
  output: 'static',
  // The thank-you page is a conversion step, not content: kept out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
  // Old URLs kept working after content moved. GitHub Pages has no server
  // redirects, so Astro writes a small page with a meta refresh + canonical.
  redirects: {
    // The iGaming note was folded back into the Growth Architect page (Nov 2026)
    '/notes/growth-architecture-for-white-label-igaming/': '/growth-architect-costa-rica/',
    '/about/': '/about-me/',
  },
});
