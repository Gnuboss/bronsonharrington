import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Bronson Harrington - Notes',
    description: 'Notes on SEO and AEO, growth systems, digital sovereignty and the things I build.',
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      categories: note.data.tags,
      link: `/notes/${note.slug}/`,
    })),
  });
}
