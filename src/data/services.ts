// The services menu, organised by Growth OS stage.
// Diagnose comes first because every engagement starts by finding the real
// constraint; Fractional Growth Leadership spans all stages, so it stands apart.
// Names, taglines and summaries come from content-source/services.md.

export interface Dish {
  code: string;
  name: string;
  tagline: string;
  summary: string;
}

export interface Course {
  id: string;
  num: string;
  stage: string;
  title: string;
  intro: string;
  dishes: Dish[];
}

export const courses: Course[] = [
  {
    id: 'diagnose',
    num: '00',
    stage: 'diagnose',
    title: 'Diagnose.',
    intro:
      "Every engagement starts here. Most sites don't have a traffic problem, they have a constraint problem, and it's rarely where people think it is. These audits find what's actually limiting growth before anyone spends money fixing the wrong thing.",
    dishes: [
      { code: 'X01', name: 'Revenue System Diagnosis', tagline: 'Find the constraint before you fix the wrong thing', summary: 'A forensic audit of your whole growth system, not just your SEO: demand, trust, conversion, structure and measurement.' },
      { code: 'X02', name: 'Technical SEO Audit', tagline: 'Uncover hidden performance barriers', summary: 'Crawling, indexing, architecture, Core Web Vitals and structured data, checked for what limits visibility.' },
      { code: 'X03', name: 'SEO Second Opinion', tagline: 'Independent review and validation', summary: 'An objective look at an existing strategy, agency deliverable or proposal before you commit to it.' },
      { code: 'X04', name: 'Competitive Gap Analysis', tagline: 'Discover opportunities your competitors miss', summary: 'Where competitors outperform you, where they are weak, and which gaps are worth taking.' },
    ],
  },
  {
    id: 'foundations',
    num: '01',
    stage: 'foundations',
    title: 'Foundations.',
    intro:
      'Everything fully within your control: position, site, structure and technical health. You cannot compound on a broken base, so this course makes sure content and links built later produce the results they should.',
    dishes: [
      { code: 'F01', name: 'Brand Strategy', tagline: 'Define your position before you promote it', summary: 'A clear direction that aligns your business, audience, messaging and market position.' },
      { code: 'F02', name: 'Website Strategy', tagline: 'Build the right website before you build the website', summary: 'Business goals, user needs, content and functionality aligned before development begins.' },
      { code: 'F03', name: 'Website Development', tagline: 'Build a website designed to perform', summary: 'Sites, landing pages and content hubs built for usability, speed, search and scale.' },
      { code: 'F04', name: 'Local SEO', tagline: 'Increase visibility where it matters most', summary: 'Google Business Profile, maps, citations and local results that bring nearby customers in.' },
      { code: 'F05', name: 'SEO Recovery', tagline: 'Recover from traffic losses and ranking declines', summary: 'Find what an update, migration or technical change broke, and rebuild from there.' },
    ],
  },
  {
    id: 'growth',
    num: '02',
    stage: 'growth',
    title: 'Growth.',
    intro:
      "Where the foundations start paying off. Topical depth, a publishing rhythm that compounds, and the guidance to keep it pointed at the right things, so rankings move in ways that turn into real outcomes.",
    dishes: [
      { code: 'G01', name: 'Content Strategy', tagline: 'Create content with purpose', summary: 'A roadmap built from audience needs, search demand and business goals.' },
      { code: 'G02', name: 'Content Production', tagline: 'Publish content that builds visibility', summary: 'Site copy, articles, guides and resource hubs that serve readers and search alike.' },
      { code: 'G03', name: 'Topical Authority Development', tagline: 'Own the conversations that matter', summary: 'Interconnected content clusters that show genuine depth across your key subjects.' },
      { code: 'G04', name: 'SEO Consulting', tagline: 'Strategic search guidance for sustainable growth', summary: 'Senior guidance across technical SEO, content, architecture and AI search visibility.' },
      { code: 'G05', name: 'Conversion Optimization', tagline: 'Turn more visitors into customers', summary: 'Experience, messaging and calls to action improved so more visitors take action.' },
    ],
  },
  {
    id: 'domination',
    num: '03',
    stage: 'domination',
    title: 'Domination.',
    intro:
      "The shift from being included to being recommended, across search rankings, answer engines and generative search. This course scales what's working, compounds authority and builds the systems that make gains hold.",
    dishes: [
      { code: 'D01', name: 'Authority Building', tagline: 'Become the trusted choice in your market', summary: 'Content, visibility, expertise and brand signals combined into recognised leadership.' },
      { code: 'D02', name: 'AI Visibility Optimization', tagline: 'Stay visible in the future of search', summary: 'Presence across AI assistants, generative search and the discovery channels emerging next.' },
      { code: 'D03', name: 'Growth Strategy', tagline: 'Create a roadmap for scalable growth', summary: 'Market insight, SEO, content and conversion combined into one plan for leads and revenue.' },
      { code: 'D04', name: 'Marketing Automation', tagline: 'Create systems that work while you sleep', summary: 'Lead nurturing, follow-up, reporting and workflows connected so they run consistently.' },
    ],
  },
];

// Spans every stage, so it's offered on its own, like a chef's table
export const chefsTable: Dish = {
  code: 'L01',
  name: 'Fractional Growth Leadership',
  tagline: 'Senior strategic support without a full-time hire',
  summary:
    'Experienced growth leadership when you need direction, oversight and accountability across marketing, SEO, websites, content and performance, without the commitment of a permanent executive role.',
};

export const steps = [
  { key: '01 / discovery', title: 'Understand the business', text: 'A conversation about your goals, your current challenges and what you have tried so far.' },
  { key: '02 / audit', title: 'Identify the opportunities', text: 'The right diagnosis for your situation, turned into a short list of what matters most.' },
  { key: '03 / plan', title: 'Build the roadmap', text: 'A prioritised plan across the stages, delivered so you can act on it, with me or without me.' },
];

export const faqs = [
  { q: 'Do I need an audit first?', a: "Usually it's the best place to start, but not always. Most businesses only need a few items from this menu, depending on their goals and stage, and a first conversation is enough to tell which." },
  { q: 'Do you work with businesses in specific industries?', a: 'Many: professional services, trades, technology, e-commerce, hospitality and local businesses, as well as the regulated verticals where I spent most of my career. The principles of visibility, authority and growth apply across most markets.' },
  { q: 'Can you help if I already have a marketing team or agency?', a: 'Yes. I often work as a strategic advisor or second opinion alongside an internal team or agency rather than replacing them.' },
  { q: 'How long does SEO take to show results?', a: 'Some technical fixes show results quickly, but meaningful growth usually builds over several months as authority, relevance and trust strengthen.' },
  { q: 'Do you build websites as part of your SEO work?', a: "Yes. Websites and search are closely connected, so whether it's improving an existing site or building a new one, the aim is a platform that supports visibility, experience and conversion." },
  { q: 'What is AI Visibility Optimization?', a: 'Helping a business stay discoverable inside AI assistants, generative search and answer engines. As search moves beyond ten blue links, being cited and recommended matters as much as ranking.' },
  { q: 'Do you offer one-off projects or ongoing support?', a: 'Both. Some engagements are a single audit or strategy session; others are ongoing consulting or fractional leadership.' },
  { q: 'How do I know which service is right for me?', a: "If you're not sure, start a conversation. We'll go through your goals and challenges and work out the right first step together." },
];
