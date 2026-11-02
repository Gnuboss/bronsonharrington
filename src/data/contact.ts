// Contact form topics. Each topic carries its own button label, following
// the form standard's copy rule: the button names the outcome the visitor
// gets, never the action ("submit", "send").
//
// The first topic is the default on generic pages. Pages that make one
// topic obvious pre-select it (see topicForPath): a field note pre-selects
// "something I wrote", the lab "a build", and so on.

export const FORM_ENDPOINT = 'im@bronson.co.za';

// Kept honest: the promise on the page has to match what actually happens.
export const RESPONSE_PROMISE = 'I read everything · Replies usually within a few days';

export const topics = [
  { value: 'hello', label: 'Just saying hello', button: 'Get a reply' },
  { value: 'notes', label: 'Compare notes on SEO / AEO', button: 'Start the conversation' },
  { value: 'build', label: 'A build or tool of mine', button: 'Ask about the build' },
  { value: 'writing', label: 'Something I wrote', button: 'Continue the thread' },
  { value: 'work', label: 'Working together', button: 'Start a work conversation' },
] as const;

export type TopicValue = (typeof topics)[number]['value'];

export function topicForPath(pathname: string): TopicValue {
  if (pathname.startsWith('/notes/') && pathname !== '/notes/') return 'writing';
  if (pathname.startsWith('/lab/')) return 'build';
  if (pathname.startsWith('/framework/')) return 'notes';
  return 'hello';
}
