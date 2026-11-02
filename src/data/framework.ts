// Growth OS stages, shared by the framework page and the home page.
// Each phase covers three peer disciplines (uniform grid), but the phases
// themselves are a real sequence (numbered flow, stacked in order).
export const phases = [
  {
    id: 'foundations',
    num: '01',
    name: 'Foundations',
    headline: 'Where organic growth actually starts.',
    lede: "Before content, before links, before anything compounds, the foundation has to be right. Foundations covers everything fully within your control: everything a search engine needs to find, crawl, understand and trust a site before new content or a single link has any meaningful effect.",
    items: [
      { title: 'Technical health', text: 'Crawl analysis, redirect chains, Core Web Vitals, structured data and platform-specific issues. In regulated verticals that includes white-label template duplication and geo-blocking that quietly suppresses indexation in licensed markets.' },
      { title: 'Indexation repair', text: 'Crawl budget spent on the pages that matter rather than template junk. Canonicals clarified, redirect chains resolved, robots.txt and XML sitemaps validated.' },
      { title: 'Content quality review', text: "Existing content checked against quality rater guidelines and E-E-A-T. In regulated markets, compliance language and disclaimers have to satisfy raters and regulators at the same time." },
    ],
    why: "You can't compound on a broken base. The most common pattern I see is heavy investment in content and links while the technical foundation actively suppresses the results: rankings that should move don't, and link equity leaks into redirect chains and orphaned URLs.",
  },
  {
    id: 'growth',
    num: '02',
    name: 'Growth',
    headline: 'Where the foundations start paying off.',
    lede: "A clean technical foundation without content and authority is just a well-organised empty site. Growth is where topical authority gets built, a publishing rhythm gets established, and rankings start moving in ways that translate to real outcomes.",
    items: [
      { title: 'Topical authority', text: 'Mapping and building the full semantic territory a site needs to own, with hub-and-spoke clusters that signal genuine depth rather than isolated keyword targeting.' },
      { title: 'Content velocity', text: 'A cadence that compounds rather than spikes. One well-structured piece a week that builds the cluster beats ten pieces dropped at once followed by silence.' },
      { title: 'Link acquisition', text: 'Editorial links from sources that carry real authority in your market, and data-driven content that earns citations. No schemes or shortcuts that become a liability at the next algorithm update.' },
    ],
    why: "The relationship between Foundations and Growth is foundational: you can't build topical authority on a crawl-broken site. The relationship between Growth and Domination is multiplicative: every new cluster page keeps reinforcing the pages above it long after it's published.",
  },
  {
    id: 'domination',
    num: '03',
    name: 'Domination',
    headline: 'Where organic gains become permanent.',
    lede: "Ranking is not the same as dominating. Domination is the shift from being included in results to being recommended, across search rankings, answer engines and generative search. It scales what Growth proved and builds the systems that make the gains hold.",
    items: [
      { title: 'Scale what works', text: "Doubling down on the content and authority angles that are actually gaining traction, like pushing page-two rankings to page one, where the traffic curve inflects sharply." },
      { title: 'Compound authority', text: 'A fully interconnected cluster where every supporting page passes authority to the pages that matter, E-E-A-T signals reinforced at scale, and structured data marking up the right entities.' },
      { title: 'Measurement systems', text: 'Tracking the signals that predict vulnerability, not just rankings and traffic: topical gaps, thin-page ratios and crawl health. When a core update lands, you know within days whether you are exposed.' },
    ],
    why: "Organic gains without measurement systems are temporary. Most SEO work stops before this phase, and the gains slowly erode as competitors catch up or an update hits without warning. Domination is what keeps the engine running afterwards.",
  },
];

