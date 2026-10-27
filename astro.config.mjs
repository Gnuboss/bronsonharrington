import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bronson.co.za/',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  // Old URLs kept working after content moved. GitHub Pages has no server
  // redirects, so Astro writes a small page with a meta refresh + canonical.
  redirects: {
    '/growth-architect-costa-rica/': '/notes/growth-architecture-for-white-label-igaming/',
    '/about/': '/about-me/',
  },
});
