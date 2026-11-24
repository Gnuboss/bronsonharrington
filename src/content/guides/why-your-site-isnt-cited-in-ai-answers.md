---
title: Why your site isn't cited in AI answers
seoTitle: Why Isn't My Site Cited in AI Answers? Causes and Fixes
description: Your competitors appear in AI answers and you don't. The symptoms, the four usual causes and the fixes in order, with data and a real example.
answer: Most sites missing from AI answers have one of five problems. The page isn't eligible to show with a snippet, the answer is buried, the content is hard to crawl, the brand has few trust signals, or the category itself isn't defined. Check eligibility first, then define your category and lead with the answer.
date: 2026-11-23
problem: We don't show up in AI answers
fix: V05
stage: domination
draft: false
faq:
  - q: Does ranking on page one guarantee an AI citation?
    a: No. Ahrefs found that about 38% of URLs cited in Google AI Overviews also ranked in the top 10 for the query, so most cited pages came from somewhere else. Ranking helps, but it is not the whole picture.
  - q: Do I need special schema or an llms.txt file to be cited?
    a: For Google's AI features, Google says no. Its documentation states there is no special schema.org markup to add and no new machine-readable or AI text files needed. Other assistants publish less guidance, so treat these files as housekeeping rather than a lever.
  - q: What if search engines confuse my category with something else?
    a: Define it. Publish one page that says what the term means for you, in question-and-answer form, and back it with a downloadable document. I did this for the term "Growth Architect, Costa Rica", where results were mostly architecture firms. The page now ranks for the term and I appear in AI Overviews for it.
  - q: How do I check whether my brand is being cited?
    a: Run your 10 to 20 most important buyer questions through ChatGPT, Perplexity and Google in a private window. Log whether you are cited, which pages are, and which competitors appear. Repeat monthly. Dedicated tracking tools exist, but a manual log is a reasonable start.
  - q: How long do changes take to show up?
    a: Recrawling and reindexing can take days to weeks, and AI answers also vary between runs. Judge progress over several months of monthly checks, not a few days.
  - q: Is this harder in regulated industries?
    a: Usually, yes. Topics where mistakes can harm people, such as health, money and gambling, tend to get more cautious treatment, and accuracy matters more because offers and terms get quoted. Keep authorship, claims and compliance information accurate, dated and consistent across your pages.
sources:
  - title: "Update: 38% of AI Overview Citations Pull From The Top 10"
    url: https://ahrefs.com/blog/ai-overview-citations-top-10/
    publisher: Ahrefs
    date: "2 March 2026, modified 31 May 2026"
  - title: AI features and your website
    url: https://developers.google.com/search/docs/appearance/ai-features
    publisher: Google Search Central
    date: "last updated 10 December 2025"
---

## Symptoms

You probably have this problem if several of these are true:

- Your brand doesn't appear when you ask AI assistants your main buyer questions, while competitors do.
- You rank on page one for a query, yet the AI answer cites other pages.
- Your brand name is rarely mentioned or searched for outside your own site.
- Pages that answer a question bury the answer under several paragraphs of introduction.
- Search Console lists important pages as excluded or not indexed.

To confirm, run 10 to 20 buyer questions through ChatGPT, Perplexity and Google in a private window and write down who is cited. Do it again next month. The comparison over time matters more than any single result.

## Causes

### The page isn't eligible in the first place

Google says a page must be indexed and eligible to be shown in Search with a snippet to appear as a supporting link in AI Overviews or AI Mode. A stray noindex tag, a robots.txt block or a snippet restriction removes the page from consideration before quality is even a question. To test, run the URL through the URL Inspection tool in Search Console and check the page's meta robots settings.

### Ranking alone doesn't decide citations

Ahrefs analysed about 4 million AI Overview URLs across 863,000 keyword results and found 37.9% of cited URLs were also in the top 10. In its earlier study, in July 2025, the figure was about 76%. Ahrefs puts the drop down to Google using more related sub-queries, and notes that changes in its methodology could also affect the comparison. Either way, a page can be cited without ranking well, and rank well without being cited.

### The answer is hard to extract

Pages that open with history, definitions and context before getting to the point give a retrieval system little to lift. A page that answers the question in its first paragraph, under a heading phrased like the question, is easier to quote. To test, read your top page's first 100 words and ask whether they answer the query by themselves.

### Weak entity and trust signals

An anonymous author, a brand name written three different ways across the web, and no mentions from sites your buyers read all make it harder for a system to treat you as a source worth citing. Topics where bad advice can cause harm get more caution still. To test, search for your brand and author name and look at whether the results agree with each other.

### The category itself isn't defined

If your term means something else to a search engine, it can't match you to the query. Search for "growth architect Costa Rica" and the results are mostly architectural firms, because that is what the words usually mean. A system that doesn't recognise the category has nothing to cite you for. To test, search your service term plus your location and see who the results are about.

### The platform hides content from crawlers

If the answer only appears after JavaScript runs, or sits behind a platform that serves thin pages to bots, crawlers may see little. This is common on turnkey platforms. I wrote about one approach in [growth architecture for white-label iGaming stacks](/notes/growth-architecture-for-white-label-igaming/). To test, view the page source and check that the answer text is in the HTML.

## Remedies

Work through these in order, because each one is only worth doing once the previous one is sorted.

### 1. Confirm eligibility

Check indexing, noindex tags, robots.txt and snippet settings on every page you want cited. This takes an afternoon and is the cheapest fix.

### 2. Rewrite top pages answer-first

For each key page, use a heading that matches the question, follow it with a 40 to 60 word answer, then give the detail. Break long pages into sections that each answer one question on their own.

### 3. Keep what can be cited accurate

State each fact that matters, such as an offer, its terms, a licence or a price, in one place, dated, and worded the same everywhere it appears. A system that quotes you will quote whichever version it finds, so a page that disagrees with itself or is out of date is a risk. Make these pages indexable, accessible to assistive technology as well as crawlers, and split into clearly headed sections that each stand alone.

### 4. Define the category if it isn't obvious

Publish one dedicated page that states what the term means, how it differs from the look-alike meaning, and who it is for. Write it as questions and answers, and give it a downloadable document that restates the definition. Keep the name, description and author details identical everywhere. This is the least obvious fix on the list, and it worked for me, as the next section shows.

### 5. Make the answer visible to crawlers

Serve the answer text in the HTML the server sends. If your platform can't do that, put the pages that matter on a layer that can.

### 6. Build one consistent entity

Use one brand name, one author bio and one short description everywhere you appear. Mark up the organisation and author with schema so the details match. It isn't required for Google's AI features, but it keeps the signals consistent for people and machines alike.

### 7. Earn mentions where your buyers read

Original data, useful tools and expert commentary get cited by others. Aim for a few mentions on sites your audience trusts rather than many on sites they don't.

### 8. Track monthly

Keep the buyer-question log going. Note which pages are cited and what changed in the month before.

## From my work

When I searched for "Growth Architect, Costa Rica", the results were filled with architectural firms. Search engines didn't recognise the category, and I wasn't mentioned in AI Overviews either.

So I published a [Growth Architect, Costa Rica page](/growth-architect-costa-rica/) written in a question-and-answer style that defines the term, and attached a [PDF](/downloads/growth-architect-costa-rica-bronson-harrington.pdf) that restates it. The page has since built rankings in the category, helped define it, and I now appear in AI Overviews for the term.

One example isn't a method, and the part that carries over is not the page type. In gaming and in any offer-led market, what gets cited has to be accurate, and the only way to influence that is to make your own pages accurate, indexable and accessible, with clear structure and content split into self-contained chunks, so they are eligible to be used at all. This is one site and one niche phrase, so I wouldn't expect the same result for a crowded keyword. I also made several changes together, so I can't say how much each contributed.

At BetAnySports, where I was SEO lead, we added GEO and AEO implementation to a wider SEO programme and organic traffic grew 200%. That programme also covered technical fixes and content, so I don't credit the AI work alone.

## The data

Two sources are worth knowing, and they point the same way: there is no shortcut.

Google's documentation says there are "no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary", and that you don't need new markup or AI text files. The page must be indexed and eligible to show with a snippet.

Ahrefs' analysis shows ranking in the top 10 covers only part of what gets cited: 37.9% of cited URLs also ranked there, 31.2% ranked 11 to 100, and 31.0% ranked beyond 100.
