import { getCollection, type CollectionEntry } from 'astro:content';

export type ArchiveCollection = 'eras' | 'technologies' | 'vehicles' | 'controversies';
export type ArchiveEntry<T extends ArchiveCollection> = CollectionEntry<T>;

const publicStatuses = new Set(['published', 'source-review', 'technical-review', 'needs-update']);

export function entrySlug(entry: { id: string }) {
  return entry.id.replace(/\.mdx?$/, '').replace(/\/index$/, '');
}

export function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export async function getPublicEntries<T extends ArchiveCollection>(collection: T) {
  const entries = await getCollection(collection, ({ data }) => publicStatuses.has(data.status));

  return entries.sort((a, b) => {
    if ('order' in a.data && 'order' in b.data) {
      return Number(a.data.order) - Number(b.data.order);
    }

    return a.data.title.localeCompare(b.data.title);
  });
}

export function pathFor(collection: ArchiveCollection, slug: string) {
  return `/${collection}/${slug}/`;
}

export function categoryLabel(category: string) {
  return titleFromSlug(category);
}
