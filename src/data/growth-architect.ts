// Source text for the Growth Architect, Costa Rica page AND its PDF.
// Both are built from this file, so the web page (the canonical version)
// and the downloadable document can never say different things.
//
// Writing rule for retrieval (RAG / AI answers): every answer and section
// must make sense on its own, because answer engines lift passages a few
// hundred words at a time. So each one names Bronson Harrington in full
// instead of leaning on "he" or "this framework" from an earlier section.

export const PAGE_URL = 'https://bronson.co.za/growth-architect-costa-rica/';
export const PDF_FILE = 'growth-architect-costa-rica-bronson-harrington.pdf';
export const PDF_URL = `https://bronson.co.za/downloads/${PDF_FILE}`;
// Old download URL, still served (with the same new document) so existing links keep working
export const PDF_LEGACY_FILE = 'igaming-enterprise-growth-architecture-framework.pdf';

export const DOC = {
  title: 'Growth Architect, Costa Rica: What a Growth Architect Does',
  subtitle: 'The Growth OS method, with white-label iGaming as a worked example',
  version: '2.0',
  date: '2026-11-01', // bump when the content changes, then run `npm run pdf`
  subject:
    'Definition of a Growth Architect and how Bronson Harrington, a Growth Architect in San José, Costa Rica, applies the Growth OS method, with a white-label iGaming architecture as a worked example.',
  keywords: [
    'Growth Architect',
    'Growth Architect Costa Rica',
    'Bronson Harrington',
    'Growth OS',
    'growth architecture',
    'answer engine optimization',
    'AI search visibility',
    'technical SEO',
    'white-label iGaming',
    'server-side pre-rendering',
  ],
};

export const faqs = [
  {
    q: 'What is a Growth Architect?',
    a: 'A Growth Architect designs the system organic growth runs on, instead of working through isolated SEO tasks. That system covers the technical foundation a site is built on, the content and authority it accumulates, and how it gets discovered across search engines and AI answer engines. The goal is growth that compounds and holds.',
  },
  {
    q: 'How is a Growth Architect different from an SEO consultant?',
    a: "An SEO consultant usually works page by page: fixing issues, targeting keywords, building links. A Growth Architect works upstream of that. Many organic growth problems are architecture problems first, such as a platform search engines can't render or a site structure that splits its own authority. Content and links only compound once that structure is right.",
  },
  {
    q: 'Who is Bronson Harrington?',
    a: 'Bronson Harrington is a Growth Architect based in San José, Costa Rica. He has built and grown websites since 2000, with more than 25 years across iGaming, fintech, legal and other regulated markets, where organic search often carries most of the revenue.',
  },
  {
    q: 'What method does Bronson Harrington use?',
    a: "Bronson Harrington uses Growth OS, his three-stage model. Foundations makes a site findable, crawlable and trusted. Growth builds topical authority and a publishing rhythm. Domination moves a site from being included in results to being recommended, across search rankings, answer engines and generative search.",
  },
  {
    q: "What results is Bronson Harrington's approach based on?",
    a: 'Mostly regulated iGaming. At Betcris, Bronson Harrington resolved more than 20,000 technical issues across a 25,000-page network and more than doubled organic acquisition. At JazzSports he built an organic system across a 17-property portfolio generating over $20M a year, with about 75% of revenue from organic search. At BetAnySports, organic traffic grew 200%, alongside early work on visibility in AI search.',
  },
  {
    q: 'Does the work depend on being in Costa Rica?',
    a: 'No. Costa Rica is where Bronson Harrington is based, and it puts him in Americas time zones. The approach applies to any site where organic search and AI visibility matter.',
  },
];

// The worked example. Only in the PDF; the page carries a short summary.
export const example = [
  {
    q: 'Why do white-label iGaming sites struggle in search and AI answers?',
    paras: [
      'Most white-label iGaming platforms render their pages in the browser with JavaScript frameworks such as Angular or React. That works for gameplay, but search crawlers often time out on it, and AI retrieval systems that ingest pages into vector databases usually do not run that JavaScript at all. Game lobbies, promotions and odds end up largely invisible to both.',
      'In Bronson Harrington\'s Growth OS terms, this is a Foundations problem: no amount of content or links fixes a site that crawlers cannot read.',
    ],
  },
  {
    q: 'What is the satellite acquisition layer?',
    paras: [
      'The satellite acquisition layer is the architecture Bronson Harrington uses for white-label operators. A lightweight, server-side pre-rendered (SSPR) front end serves discovery content as flat, semantic HTML from edge caches, with clean structured data. Crawlers and AI agents read it instantly, while the operator\'s own platform keeps handling accounts, deposits and play.',
      'Edge routing rules (for example Cloudflare Workers) split traffic by path:',
    ],
    table: {
      head: ['Traffic', 'Example paths', 'Served by'],
      rows: [
        ['Discovery and answer-engine content', '/sports/*, /betting-tips/*, /casino-guides/*', 'Pre-rendered satellite layer at the edge'],
        ['Transactions', '/play/*, /deposit, /lobby, secure APIs', "Operator's turnkey platform and PAM database"],
      ],
    },
    after: [
      'Live data such as lobby listings and odds reaches the satellite layer through asynchronous REST or GraphQL calls made server to server at the edge, so crawler and bot traffic never queries the player account management (PAM) database directly.',
    ],
  },
  {
    q: 'How does the architecture protect the database at peak traffic?',
    paras: [
      'A push notification to millions of players, or a big match window, sends discovery browsing, live odds and checkout to the same PAM database at once. Connection pools run out, latency climbs and checkouts time out. This is the fan-out problem, and it is a Domination-stage concern in Growth OS: holding gains under load.',
      'Bronson Harrington\'s fix decouples the read-heavy traffic in four steps:',
    ],
    steps: [
      'Micro-frontends at the edge: odds matrices, bet slips and account views become independent components served from CDN nodes.',
      'Event streams: non-financial events, sessions and slip-building go through an asynchronous pipeline such as Apache Kafka, buffering the core database.',
      'Read replicas behind proxies: high-frequency reads go to read-only replicas, and connection pooling limits protect the primary database.',
      'Isolated core: the PAM core, financial clearing and compliance ledgers run on their own network layer.',
    ],
  },
  {
    q: 'How does it reduce onboarding friction in LATAM markets?',
    paras: [
      'Cross-border expansion into markets such as Brazil, Mexico and Colombia often loses players between registration and first deposit, especially when KYC steps are slow and rigid. Bronson Harrington\'s approach integrates payment aggregators for regional instant rails, Pix in Brazil and SPEI in Mexico, into the satellite layer, and runs KYC checks in parallel with deposit initiation rather than before it, within the operator\'s regulatory framework.',
    ],
  },
  {
    q: 'How does it lower acquisition costs?',
    paras: [
      'Heavy reliance on affiliates pushes cost per acquisition up during multi-market expansion. The satellite layer builds an owned channel instead: multi-language hreflang structures, semantic topic clusters and fast localized landing pages capture non-branded, long-tail organic search and feed that intent straight into registration. This is the Growth stage of Growth OS.',
      'On the revenue side, Bronson Harrington also audits the software and content distribution mix. Direct server-to-server integrations with strong localized game suites and sportsbook engines can remove intermediary aggregation layers and their revenue share.',
    ],
  },
  {
    q: 'Does the operator need to rebuild their platform?',
    paras: [
      'No. The satellite layer works as an external acceleration layer. It requires no structural change to the operator\'s turnkey stack, PAM database or platform compliance certificates, and it is deployed through DNS and edge CDN routing.',
    ],
  },
];

export const summary = {
  head: ['Problem', 'Platform limitation', 'Growth architecture answer'],
  rows: [
    ['Visibility to crawlers and AI agents', 'Client-side JavaScript times out or is never run', 'Pre-rendered HTML served from the edge'],
    ['Database resilience at peak', 'Fan-out from simultaneous reads during push events', 'Edge caching, event streams and read replicas'],
    ['Regional onboarding', 'Checkout friction from rigid KYC flows', 'Instant regional rails (Pix, SPEI) with parallel KYC'],
    ['Acquisition cost', 'Dependence on affiliates', 'Owned long-tail organic channel in every language'],
  ],
};
