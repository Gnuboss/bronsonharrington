// The one definition of Bronson as an entity. Every page that describes him
// in schema uses this, so Google and AI answer engines see the same name,
// title, location and profiles everywhere (and the PDF metadata matches).
// Keep in step with the Google Business Profile: same name, phone, website.
import { CONTACT } from '../config/site';
import { profileUrls } from './socials';

export const SITE = 'https://bronson.co.za';
export const PERSON_ID = `${SITE}/#/schema/person`;

export const PERSON = {
  name: 'Bronson Harrington',
  jobTitle: 'Growth Architect',
  // The category phrase the Growth Architect page defines
  descriptor: 'Growth Architect, Costa Rica',
  locality: 'San José',
  country: 'Costa Rica',
  countryCode: 'CR',
  description:
    'Growth Architect based in San José, Costa Rica, with more than 25 years building organic growth systems in iGaming, fintech, legal and other regulated markets.',
  knowsAbout: [
    'Growth architecture',
    'Search engine optimization',
    'Answer engine optimization',
    'AI search visibility',
    'Technical SEO',
    'Topical authority',
    'Regulated market SEO',
    'iGaming organic acquisition',
    'Server-side pre-rendering',
  ],
};

export const personSchema = (extra: Record<string, unknown> = {}) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PERSON.name,
  jobTitle: PERSON.jobTitle,
  description: PERSON.description,
  url: SITE,
  email: `mailto:${CONTACT.email}`,
  telephone: CONTACT.phoneHref.replace('tel:', ''),
  homeLocation: {
    '@type': 'Place',
    name: `${PERSON.locality}, ${PERSON.country}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.locality,
      addressCountry: PERSON.countryCode,
    },
  },
  knowsAbout: PERSON.knowsAbout,
  sameAs: profileUrls,
  ...extra,
});

// The Google Business Profile, mirrored in schema so Google can match the
// listing to this site and to the Person above. Name must stay exactly as
// it appears on the profile.
export const BUSINESS_ID = `${SITE}/#/schema/business`;
export const BUSINESS = {
  name: 'Bronson Harrington, Growth Architect, Costa Rica',
  // Profile share link from Google. Swap for the Maps URL with ?cid= when available.
  profileUrl: 'https://share.google/xIzIqH90wLmnRsXaH',
  // Categories exactly as listed on the profile, primary first. Schema has
  // no category field, so they're expressed as the services offered.
  categories: ['Marketing consultant', 'Media Consultant', 'Design agency'],
};

export const businessSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  description: `${PERSON.name} is a Growth Architect in ${PERSON.locality}, ${PERSON.country}: marketing and media consulting and design, focused on growth architecture, SEO and AI search visibility.`,
  url: SITE,
  email: `mailto:${CONTACT.email}`,
  telephone: CONTACT.phoneHref.replace('tel:', ''),
  // Service-area business, as on the profile: HQ in Costa Rica (city and
  // country only, no street address), serving clients worldwide
  address: {
    '@type': 'PostalAddress',
    addressLocality: PERSON.locality,
    addressCountry: PERSON.countryCode,
  },
  location: {
    '@type': 'Place',
    name: `Headquarters: ${PERSON.locality}, ${PERSON.country}`,
    address: { '@type': 'PostalAddress', addressLocality: PERSON.locality, addressCountry: PERSON.countryCode },
  },
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  founder: { '@id': PERSON_ID },
  sameAs: [BUSINESS.profileUrl],
  knowsAbout: PERSON.knowsAbout,
  // Mirrors the profile's categories, primary first
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      { name: 'Marketing consulting', category: BUSINESS.categories[0] },
      { name: 'Media consulting', category: BUSINESS.categories[1] },
      { name: 'Design', category: BUSINESS.categories[2] },
    ].map((sv) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: sv.name, serviceType: sv.category, provider: { '@id': BUSINESS_ID }, areaServed: { '@type': 'Place', name: 'Worldwide' } },
    })),
  },
});
