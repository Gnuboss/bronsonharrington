// Profiles and communities, grouped. The contact page lists these, and
// `profile: true` entries are also added to the Person schema (sameAs) so
// search engines and AI answers connect them to Bronson.
export interface Social {
  name: string;
  handle: string;
  href: string;
  profile: boolean; // a personal profile (rel="me", sameAs), not a brand or group
}

export interface SocialGroup {
  label: string;
  links: Social[];
}

export const socialGroups: SocialGroup[] = [
  {
    label: 'work',
    links: [
      { name: 'LinkedIn', handle: 'in/bronsonharrington', href: 'https://www.linkedin.com/in/bronsonharrington/', profile: true },
      { name: 'GitHub', handle: 'Gnuboss', href: 'https://github.com/Gnuboss', profile: true },
    ],
  },
  {
    label: 'personal',
    links: [
      { name: 'Facebook', handle: 'BronsonHarrington', href: 'https://www.facebook.com/BronsonHarrington', profile: true },
      { name: 'Instagram', handle: '@bronson.harrington', href: 'https://www.instagram.com/bronson.harrington/', profile: true },
      { name: 'Spotify', handle: 'gnuboss', href: 'https://open.spotify.com/user/gnuboss', profile: true },
      { name: 'DeviantArt', handle: 'headspace', href: 'https://www.deviantart.com/headspace', profile: true },
    ],
  },
  {
    label: 'misterio studios',
    links: [
      { name: 'YouTube', handle: '@MisterioStudios', href: 'https://www.youtube.com/@MisterioStudios', profile: false },
      { name: 'Facebook group', handle: 'The Glyphstream Collective', href: 'https://www.facebook.com/share/g/1EAE6CexqH/', profile: false },
    ],
  },
];

export const profileUrls = socialGroups.flatMap((g) => g.links.filter((l) => l.profile).map((l) => l.href));
