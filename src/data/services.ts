// The services menu. Growth OS solutions are the dishes; services are the
// ingredients they're made from, and one ingredient can appear in more than
// one dish. Ingredients live on pantry shelves (the original four service
// groups); dishes reference them by code, with an optional note on how that
// ingredient is used in that dish.
// Names, taglines and summaries come from content-source/services.md.

export interface Ingredient {
  code: string;
  name: string;
  shelf: string;
  tagline: string;
  summary: string;
}

export const shelves = ['strategy', 'search & visibility', 'websites & systems', 'content & authority'];

export const ingredients: Ingredient[] = [
  // Strategy
  { code: 'S01', shelf: 'strategy', name: 'Revenue System Diagnosis', tagline: 'Find the constraint before you fix the wrong thing', summary: 'A forensic audit of your whole growth system, not just your SEO: demand, trust, conversion, structure and measurement.' },
  { code: 'S02', shelf: 'strategy', name: 'Brand Strategy', tagline: 'Define your position before you promote it', summary: 'A clear direction that aligns your business, audience, messaging and market position.' },
  { code: 'S03', shelf: 'strategy', name: 'Website Strategy', tagline: 'Build the right website before you build the website', summary: 'Business goals, user needs, content and functionality aligned before development begins.' },
  { code: 'S04', shelf: 'strategy', name: 'SEO Consulting', tagline: 'Strategic search guidance for sustainable growth', summary: 'Senior guidance across technical SEO, content, architecture and AI search visibility.' },
  { code: 'S05', shelf: 'strategy', name: 'Growth Strategy', tagline: 'Create a roadmap for scalable growth', summary: 'Market insight, SEO, content and conversion combined into one plan for leads and revenue.' },
  { code: 'S06', shelf: 'strategy', name: 'Fractional Growth Leadership', tagline: 'Senior strategic support without a full-time hire', summary: 'Experienced growth leadership when you need direction, oversight and accountability across marketing, SEO, websites, content and performance, without the commitment of a permanent executive role.' },
  // Search & visibility
  { code: 'V01', shelf: 'search & visibility', name: 'Technical SEO Audit', tagline: 'Uncover hidden performance barriers', summary: 'Crawling, indexing, architecture, Core Web Vitals and structured data, checked for what limits visibility.' },
  { code: 'V02', shelf: 'search & visibility', name: 'Local SEO', tagline: 'Increase visibility where it matters most', summary: 'Google Business Profile, maps, citations and local results that bring nearby customers in.' },
  { code: 'V03', shelf: 'search & visibility', name: 'SEO Recovery', tagline: 'Recover from traffic losses and ranking declines', summary: 'Find what an update, migration or technical change broke, and rebuild from there.' },
  { code: 'V04', shelf: 'search & visibility', name: 'SEO Second Opinion', tagline: 'Independent review and validation', summary: 'An objective look at an existing strategy, agency deliverable or proposal before you commit to it.' },
  { code: 'V05', shelf: 'search & visibility', name: 'AI Visibility Optimization', tagline: 'Stay visible in the future of search', summary: 'Presence across AI assistants, generative search and the discovery channels emerging next.' },
  // Websites & systems
  { code: 'W01', shelf: 'websites & systems', name: 'Website Development', tagline: 'Build a website designed to perform', summary: 'Sites, landing pages and content hubs built for usability, speed, search and scale.' },
  { code: 'W02', shelf: 'websites & systems', name: 'Conversion Optimization', tagline: 'Turn more visitors into customers', summary: 'Experience, messaging and calls to action improved so more visitors take action.' },
  { code: 'W03', shelf: 'websites & systems', name: 'Marketing Automation', tagline: 'Create systems that work while you sleep', summary: 'Lead nurturing, follow-up, reporting and workflows connected so they run consistently.' },
  // Content & authority
  { code: 'C01', shelf: 'content & authority', name: 'Content Strategy', tagline: 'Create content with purpose', summary: 'A roadmap built from audience needs, search demand and business goals.' },
  { code: 'C02', shelf: 'content & authority', name: 'Content Production', tagline: 'Publish content that builds visibility', summary: 'Site copy, articles, guides and resource hubs that serve readers and search alike.' },
  { code: 'C03', shelf: 'content & authority', name: 'Authority Building', tagline: 'Become the trusted choice in your market', summary: 'Content, visibility, expertise and brand signals combined into recognised leadership.' },
  { code: 'C04', shelf: 'content & authority', name: 'Topical Authority Development', tagline: 'Own the conversations that matter', summary: 'Interconnected content clusters that show genuine depth across your key subjects.' },
  { code: 'C05', shelf: 'content & authority', name: 'Competitive Gap Analysis', tagline: 'Discover opportunities your competitors miss', summary: 'Where competitors outperform you, where they are weak, and which gaps are worth taking.' },
];

export const byCode = Object.fromEntries(ingredients.map((i) => [i.code, i])) as Record<string, Ingredient>;

export interface Use {
  code: string;
  note?: string; // how this ingredient is used in this dish (defaults to its summary)
}

export interface Dish {
  id: string;
  num: string;
  name: string;
  title: string;
  promise: string; // what the solution achieves
  shift: string; // the before -> after, one line
  uses: Use[];
}

// Starters: the audits that decide where to begin
export const starters: Use[] = [
  { code: 'S01' },
  { code: 'V01' },
  { code: 'V04' },
  { code: 'C05' },
];

// Main courses: the three Growth OS solutions
export const dishes: Dish[] = [
  {
    id: 'foundations',
    num: '01',
    name: 'Foundations',
    title: 'Foundations.',
    promise:
      'A brand that knows what it stands for and a website built to carry it: clear positioning, a site designed and built properly, and technical health that lets search engines find, crawl and trust everything that follows.',
    shift: 'from unclear and unstable → a solid base everything else can compound on',
    uses: [
      { code: 'S02', note: 'Positioning, audience and messaging defined before anything is promoted.' },
      { code: 'S03' },
      { code: 'W01', note: 'Web design and development built for usability, speed, search and scale.' },
      { code: 'V01', note: 'The technical fixes from the audit, implemented: crawl, indexation, structure and schema.' },
      { code: 'V02' },
      { code: 'V03', note: 'Where something is already broken, the recovery work comes first.' },
    ],
  },
  {
    id: 'growth',
    num: '02',
    name: 'Growth',
    title: 'Growth.',
    promise:
      'Where the foundations start paying off. Content that closes the gaps, a digital footprint that keeps expanding, and the authority that comes from genuine topical depth, built at a pace that compounds rather than spikes.',
    shift: 'from a well-built site → a growing footprint that search engines trust',
    uses: [
      { code: 'C01' },
      { code: 'C02' },
      { code: 'C04' },
      { code: 'C05', note: 'The gaps found at the start become the content calendar.' },
      { code: 'C03', note: 'Mentions, links and presence across the platforms your audience uses: the footprint grows beyond your own site.' },
      { code: 'S04', note: 'Ongoing direction so the content and authority work stays pointed at what moves results.' },
    ],
  },
  {
    id: 'domination',
    num: '03',
    name: 'Domination',
    title: 'Domination.',
    promise:
      "The move from being included to owning share of market. Authority and differentiation that make you the recommendation, in search rankings, answer engines and generative search, with conversion optimised so the attention turns into revenue.",
    shift: 'from included in results → recommended, and taking share of market',
    uses: [
      { code: 'C03', note: 'Category authority: thought leadership, digital PR and reputation that make you the trusted name.' },
      { code: 'S02', note: 'Differentiation, sharpened so you are chosen, not just found.' },
      { code: 'V05', note: 'Being cited and recommended by AI assistants and generative search, not just ranked.' },
      { code: 'W02' },
      { code: 'S05', note: 'A roadmap that scales what is working and protects the gains.' },
      { code: 'W03' },
    ],
  },
];

// Spans every course, so it's offered on its own, like a chef's table
export const chefsTable = 'S06';

// Which dishes use each ingredient (for the pantry)
export const usedIn = (code: string) => [
  ...(starters.some((u) => u.code === code) ? ['starters'] : []),
  ...dishes.filter((d) => d.uses.some((u) => u.code === code)).map((d) => d.name.toLowerCase()),
  ...(code === chefsTable ? ['every stage'] : []),
];

export const steps = [
  { key: '01 / discovery', title: 'Understand the business', text: 'A conversation about your goals, your current challenges and what you have tried so far.' },
  { key: '02 / starter', title: 'Find where to begin', text: 'The right audit for your situation, turned into a short list of what matters most.' },
  { key: '03 / courses', title: 'Serve the solution', text: 'The Growth OS stage you need, made from the ingredients that fit, with a plan you can act on.' },
];

export const faqs = [
  { q: 'Do I need an audit first?', a: "Usually it's the best place to start, but not always. Most businesses need one stage of the menu more than the others, and a first conversation is often enough to tell which." },
  { q: 'Can I order a single ingredient?', a: 'Yes. Plenty of engagements are one service on its own, like a technical audit or a website. The menu just shows where each one fits in the bigger picture.' },
  { q: 'Do you work with businesses in specific industries?', a: 'Many: professional services, trades, technology, e-commerce, hospitality and local businesses, as well as the regulated verticals where I spent most of my career. The principles of visibility, authority and growth apply across most markets.' },
  { q: 'Can you help if I already have a marketing team or agency?', a: 'Yes. I often work as a strategic advisor or second opinion alongside an internal team or agency rather than replacing them.' },
  { q: 'How long does SEO take to show results?', a: 'Some technical fixes show results quickly, but meaningful growth usually builds over several months as authority, relevance and trust strengthen.' },
  { q: 'What is AI Visibility Optimization?', a: 'Helping a business stay discoverable inside AI assistants, generative search and answer engines. As search moves beyond ten blue links, being cited and recommended matters as much as ranking.' },
  { q: 'Do you offer one-off projects or ongoing support?', a: 'Both. Some engagements are a single audit or strategy session; others are ongoing consulting or fractional leadership.' },
];
