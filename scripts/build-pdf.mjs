// Builds the Growth Architect, Costa Rica PDF from its print source page.
//
//   npm run pdf      (runs `astro build` first, then this)
//
// Renders dist/pdf-source/growth-architect-costa-rica/ in headless Chromium
// as a tagged PDF with a document outline (so AI and search parsers get real
// headings and reading order), then writes the metadata Google and document
// parsers read: title, author, subject, keywords, language, dates.
//
// Output goes to public/downloads/ (commit it): the new file, plus the same
// document at the old iGaming URL so existing links still get the current copy.
//
// Needs Playwright with Chromium. Not part of the CI build on purpose: run it
// locally whenever src/data/growth-architect.ts changes. One-time setup:
//   npm i -g playwright && npx playwright install chromium
import { createServer } from 'node:http';
import { readFile, writeFile, copyFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { PDFDocument, PDFName, PDFString } from 'pdf-lib';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  ({ chromium } = require(require.resolve('playwright', { paths: [process.cwd(), '/usr/lib/node_modules', '/usr/local/lib/node_modules'] })));
}

const dist = resolve('dist');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  let path = join(dist, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  try {
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
    res.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/pdf-source/growth-architect-costa-rica/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
// Metadata comes from the print page's own <head>, which is built from
// src/data/growth-architect.ts, so page, PDF text and PDF metadata share one source
const meta = await page.evaluate(() => {
  const m = (n) => document.querySelector(`meta[name="${n}"]`)?.getAttribute('content') ?? '';
  return {
    title: document.title,
    author: m('author'),
    subject: m('description'),
    keywords: m('keywords').split(',').map((k) => k.trim()).filter(Boolean),
    date: m('pdf:date'),
    descriptor: m('pdf:descriptor'),
    canonical: m('pdf:canonical'),
    file: m('pdf:file'),
    legacy: m('pdf:legacy-file'),
  };
});
for (const [k, v] of Object.entries(meta)) if (!v || (Array.isArray(v) && !v.length)) throw new Error(`PDF source page is missing ${k}`);
const footer = `<div style="width:100%;font-family:monospace;font-size:7px;color:#5c5c5c;padding:0 0.85in;display:flex;justify-content:space-between">
  <span>${meta.author} · ${meta.descriptor} · ${meta.canonical.replace('https://', '')}</span>
  <span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
const raw = await page.pdf({
  format: 'Letter',
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
  outline: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate: footer,
});
await browser.close();
server.close();

// Metadata
const pdf = await PDFDocument.load(raw, { updateMetadata: false });
const when = new Date(meta.date + 'T12:00:00-06:00');
pdf.setTitle(meta.title, { showInWindowTitleBar: true });
pdf.setAuthor(meta.author);
pdf.setSubject(meta.subject);
pdf.setKeywords([meta.keywords.join(', ')]); // one comma-separated string; pdf-lib would join with spaces
pdf.setCreator(`${meta.author} · bronson.co.za`);
pdf.setProducer('bronson.co.za build (Chromium + pdf-lib)');
pdf.setLanguage('en-US');
pdf.setCreationDate(when);
pdf.setModificationDate(when);
// Where the canonical version lives, for parsers that read the catalog
pdf.catalog.set(PDFName.of('URI'), pdf.context.obj({ Base: PDFString.of(meta.canonical) }));
const out = await pdf.save({ useObjectStreams: false });

const target = resolve('public/downloads', meta.file);
await writeFile(target, out);
await copyFile(target, resolve('public/downloads', meta.legacy));
console.log(`PDF written: public/downloads/${meta.file} (${(out.length / 1024).toFixed(0)} KB), copied to ${meta.legacy}`);
