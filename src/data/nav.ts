// Primary navigation, shared by the header (desktop + the "top" test
// variant on phones) and the thumb nav (the "radial" variant on phones).
const base = import.meta.env.BASE_URL;

export const nav = [
  { label: 'field notes', href: `${base}notes/` },
  { label: 'lab', href: `${base}lab/` },
  { label: 'framework', href: `${base}framework/` },
  { label: 'solutions', href: `${base}solutions/` },
  { label: 'services', href: `${base}services/` },
  { label: 'about', href: `${base}about-me/` },
  { label: 'contact', href: `${base}contact/`, cta: true },
];
