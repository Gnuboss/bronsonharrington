// Tools and services I use in client work. Add a line here and it shows on
// /resources/. Set `affiliate: true` when the link earns a commission, so the
// page labels it and the link carries rel="sponsored".
export interface Resource {
  name: string;
  href: string;
  what: string;
  why: string;
  affiliate?: boolean;
}
export interface ResourceGroup {
  id: string;
  title: string;
  items: Resource[];
}

export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    id: 'data',
    title: 'Data & reporting',
    items: [
      {
        name: 'Windsor.ai',
        href: 'https://windsor.ai/?fpr=bronson-673e80',
        what: 'No-code connectors for 350+ sources: GA4, Search Console, Google Ads, Meta, CRMs and more, piped into Looker Studio, BigQuery or a custom dashboard.',
        why: 'The connection layer behind my client dashboards. New client data is flowing in an afternoon, and SEO sits next to ad spend and revenue instead of in its own silo.',
        affiliate: true,
      },
    ],
  },
];
