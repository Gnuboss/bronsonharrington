---
title: Traffic drop after a site migration
seoTitle: "Traffic Drop After a Site Migration: Causes and Recovery"
description: Rankings fell after a domain move, rebrand or redesign? The symptoms, the usual causes and the recovery steps in order, with a real client example.
answer: Traffic usually falls after a migration because old URLs don't point to their new equivalents. The most common version is redirecting every old page to the new home page. Check how each old URL resolves, build a page-to-page redirect map, and fix anything blocking indexing. Most small sites need weeks to settle.
date: 2026-11-25
problem: Traffic dropped after a migration or rebrand
fix: V03
stage: foundations
faq:
  - q: How long does recovery take after a migration?
    a: Google says a small to medium-sized site can take a few weeks for most pages to move, and larger sites take longer. In the case below, rankings returned within two to three weeks of correcting the redirects.
  - q: Is it ever fine to redirect old pages to the home page?
    a: Only when the home page really is the closest equivalent, such as the old home page itself. Google advises against redirecting many old URLs to one irrelevant destination like the new home page, and says such redirects can be treated as soft 404s.
  - q: What do I do with old pages that have no replacement?
    a: Let them return a 404 or 410, or redirect several into one genuinely consolidated page. Forcing them onto an unrelated page is the thing to avoid.
  - q: Should the redirects be 301 or 302?
    a: Use permanent server-side redirects, 301 or 308, when the move won't be reverted. Send each old URL straight to its final address rather than through a chain.
  - q: How long should I keep the redirects?
    a: Google recommends keeping them as long as possible, generally at least one year. Tidy the redirect table by removing chains and mistakes, but don't switch the redirects themselves off early.
  - q: Do I need the Change of Address tool?
    a: For a move from one domain to another, yes, and it should be filed for every verified version of the old domain. Google says you don't need it for HTTP to HTTPS, www to non-www, or path changes within the same domain.
sources:
  - title: How to move a site
    url: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
    publisher: Google Search Central
    date: "last updated 20 August 2026"
  - title: Redirects and Google Search
    url: https://developers.google.com/search/docs/crawling-indexing/301-redirects
    publisher: Google Search Central
    date: "last updated 16 November 2026"
---

## Symptoms

You probably have a migration problem if several of these are true:

- Organic traffic fell sharply from the launch date and hasn't come back after a few weeks.
- Pages that ranked well before no longer appear for their main queries.
- Many old URLs now land on the same page, usually the home page.
- Search Console shows new pages as not indexed, or old URLs still listed.
- The structure, URLs or page names changed at the same time as the domain, the design or the brand.

To confirm, take the list of old URLs from your sitemap, server logs or CMS, request each one, and record the status code and the page it ends on. If a long run of different old pages all end on one destination, you've found the likely cause. Then compare per-page clicks in Search Console for the weeks before and after launch.

## Causes

### Old pages were redirected to the home page

This is the most common and the most costly mistake. Google says not to redirect many old URLs to one irrelevant destination such as the home page of the new site, and warns such redirects can be treated as soft 404s. Each old page had its own rankings and links. Sending them all to the home page tells Google that none of them has a successor, so it has to work out the new structure from scratch. To test, run the old URL list as described above and check where each one ends.

### The redirects are missing, temporary or chained

Old URLs that return an error, use a temporary redirect, or pass through several hops before reaching the new page weaken the signal. Google recommends permanent server-side redirects, 301 or 308, straight to the final URL. To test, check the status code and every hop for a sample of old URLs.

### The Change of Address was never filed

For a move between domains, Google provides a Change of Address tool in Search Console. It should be filed for every verified version of the old domain. To test, check that the old and new domains are both verified and that the tool shows the move.

### The new pages don't match what the old ones answered

A new structure often means new titles, new headings and fewer internal links. A page can be redirected correctly and still lose ground if it no longer answers the same question. To test, compare an old page and its new equivalent side by side for topic, headings and internal links.

### Something is blocking indexing

A noindex tag or a robots.txt block left over from staging, or canonical tags pointing at the old domain, will keep new pages out of the index. To test, inspect a few new URLs in Search Console and read the page's robots and canonical settings.

### It is normal settling

Google says visibility may fluctuate temporarily during a move. A short dip is expected even when everything is done correctly. The dip is the problem only when it doesn't recover once the redirects and indexing are right.

## Remedies

Work through these in order, because the first few do most of the recovery.

### 1. Build a page-to-page redirect map

List every old URL from your sitemap, server logs, CMS and the pages that earned clicks and links. For each one, choose the new page that replaces it, using the closest match by topic. Redirect one-to-one with a permanent redirect, straight to the final address.

### 2. Decide what happens to pages with no replacement

Pages that have no real successor can return a 404 or 410. Several old pages can also go to one new page when that page truly consolidates them. Don't send them to the home page just to avoid an error.

### 3. Fix anything blocking indexing

Remove leftover noindex tags and robots.txt blocks, check canonicals point at the new URLs, and submit the new sitemap.

### 4. File the Change of Address for domain moves

Do this for every verified version of the old domain. It isn't needed for HTTP to HTTPS, www changes or path moves on the same domain.

### 5. Update your own links

Point internal links, and any high-value external links you control, at the new URLs. Redirects slow users down, and Google suggests updating links where you can.

### 6. Track per page, not just in total

Watch clicks and indexing for your most important pages in Search Console. A recovering site shows the old URLs dropping out and the new ones gaining, page by page.

### 7. Keep the redirects for at least a year

Once the new pages are indexed and Search Console shows the move has settled, tidy the redirect table by removing chains and errors. Leave the redirects themselves in place for as long as possible, generally at least a year.

## From my work

A client moved to a new domain and rebranded at the same time. They also changed the structure of the site, and every old page was redirected to the home page of the new site. Their rankings dropped and nobody could see why.

The cause was the redirects. With no page-to-page mapping, Google had no way to match old pages to their replacements, so it had to re-sort the whole site. We replaced the home page redirects with individual redirects from each old page to its new equivalent. The pages regained their rankings, along with the authority and link equity they had built up, and rankings returned within two to three weeks.

Two cautions. This was one site, and recovery time depends on size, how much changed and how often Google crawls the site. And the redirect fix was the main change, but I can't isolate its effect from the normal settling Google describes.

## The data

Google's guidance on site moves is direct on this point. It says: "Don't redirect many old URLs to one irrelevant single URL destination, such as the home page of the new site." It recommends server-side permanent redirects from the old URLs to the new ones as mapped, and keeping them "for as long as possible, generally at least 1 year."

On timing, Google says "a small to medium-sized website can take a few weeks for most pages to move", and that visibility may fluctuate temporarily during the move. That fits the two to three weeks we saw once the redirects were right.
