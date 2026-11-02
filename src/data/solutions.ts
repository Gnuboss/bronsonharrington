// Solutions: start from the problem, follow the dotted leader to the fix.
// Each fix points at an ingredient (service code) or a whole course on the
// services menu, so names and links stay in step with src/data/services.ts.
// Symptoms are drawn from the "who needs this" sections of the original
// Foundations, Growth and Domination pages (content-source/).
import { byCode } from './services';

export interface Problem {
  problem: string;
  fix: string; // service code (e.g. 'V03') or a course id (e.g. 'growth')
  why: string;
}

export interface Group {
  id: string;
  label: string;
  title: string;
  intro: string;
  problems: Problem[];
}

export const groups: Group[] = [
  {
    id: 'unsure',
    label: '00 / not sure',
    title: "Something's Wrong, but What?",
    intro: "The most common situation of all. These start with finding the real constraint, because it's rarely where it first appears.",
    problems: [
      { problem: 'Our site has stopped growing', fix: 'S01', why: 'Find the one constraint actually limiting growth before fixing the wrong thing.' },
      { problem: "We're not sure our SEO agency is right", fix: 'V04', why: 'An independent look at the strategy and deliverables before you spend more on them.' },
      { problem: 'Competitors outrank us and we don’t know why', fix: 'C05', why: 'Where they outperform you, where they are weak, and which gaps are worth taking.' },
    ],
  },
  {
    id: 'foundations',
    label: '01 / foundations',
    title: 'The Base Is Broken.',
    intro: 'Problems that trace back to the foundation: the site, its structure and the brand behind it. Content and links built on top produce a fraction of what they should until these are fixed.',
    problems: [
      { problem: 'Traffic dropped after a migration or rebrand', fix: 'V03', why: 'Every redirect chain, canonical error and lost signal the move introduced, found and fixed.' },
      { problem: "We publish, but nothing ranks", fix: 'V01', why: 'Content that should rank is usually sitting on a technical problem, and fixing it can unlock work already written.' },
      { problem: 'Search engines struggle to read our platform', fix: 'V01', why: 'Rendering, crawling and structure sorted before any more content or links.' },
      { problem: "We're launching in a new market", fix: 'foundations', why: 'Targeting, structure and compliance-safe content set up right before launch, when it costs least.' },
      { problem: 'We look like everyone else in our space', fix: 'S02', why: 'A clear position and message, defined before anything else is promoted.' },
      { problem: 'Local customers can’t find us', fix: 'V02', why: 'Business profile, maps and local results that put you in front of people nearby.' },
    ],
  },
  {
    id: 'growth',
    label: '02 / growth',
    title: 'Solid Base, Not Enough Reach.',
    intro: "The site works, but it isn't growing. These are reach and authority problems, solved by building depth and a footprint that keeps expanding.",
    problems: [
      { problem: 'We have landing pages but no depth behind them', fix: 'C04', why: 'The supporting content that makes commercial pages rankable and resilient to updates.' },
      { problem: 'Our publishing started strong, then stalled', fix: 'C01', why: 'A calendar and cadence that compound, instead of a burst followed by silence.' },
      { problem: "We're stuck on page two", fix: 'C04', why: 'Page-two rankings are usually a topical depth problem; the cluster around the page moves it up.' },
      { problem: 'Nobody outside our site mentions us', fix: 'C03', why: 'Mentions, links and presence across the platforms your audience actually uses.' },
    ],
  },
  {
    id: 'domination',
    label: '03 / domination',
    title: 'Included, but Not Chosen.',
    intro: 'You show up, but you are not the one recommended. These are the problems of moving from inclusion to share of market.',
    problems: [
      { problem: "We don't show up in AI answers", fix: 'V05', why: 'A site answer engines can read, quote and trust, so you are cited and recommended.' },
      { problem: 'Good results faded after the work stopped', fix: 'domination', why: 'Compounding authority and measurement systems that keep gains from eroding.' },
      { problem: 'Every core update knocks us back', fix: 'C03', why: 'Authority and trust signals strong enough to hold through updates, with early warning when they weaken.' },
      { problem: 'Plenty of visitors, too few enquiries', fix: 'W02', why: 'Experience, messaging and calls to action improved so attention turns into revenue.' },
      { problem: 'We need senior direction, not another agency', fix: 'S06', why: 'Growth leadership embedded in the team, part-time, across every stage.' },
    ],
  },
];

// Display name and link for a fix
const courseNames: Record<string, string> = { foundations: 'Foundations', growth: 'Growth', domination: 'Domination' };
export const fixInfo = (fix: string) =>
  courseNames[fix]
    ? { label: `${courseNames[fix].toLowerCase()} (full course)`, anchor: fix }
    : { label: byCode[fix].name.toLowerCase(), anchor: fix.toLowerCase() };
