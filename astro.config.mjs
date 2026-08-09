import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages with a custom domain (bronson.co.za via CNAME),
// so site is served from the domain root rather than a /repo-name/ subpath.
export default defineConfig({
  site: 'https://bronsonharrington.com',
  output: 'static',
});
