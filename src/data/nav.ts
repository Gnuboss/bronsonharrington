// Primary navigation, shared by the header (desktop + the "top" test
// variant on phones) and the thumb nav (the "radial" variant on phones).
const base = import.meta.env.BASE_URL;

export const nav = [
  { label: 'solutions', href: `${base}solutions/` },
  { label: 'services', href: `${base}services/` },
  { label: 'framework', href: `${base}framework/` },
  { label: 'field notes', href: `${base}notes/` },
  { label: 'lab', href: `${base}lab/` },
  { label: 'about', href: `${base}about-me/` },
  { label: 'work with me', href: `${base}work-with-me/`, cta: true },
];
