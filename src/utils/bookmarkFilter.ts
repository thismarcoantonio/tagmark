import { Bookmark } from "@/declarations/Bookmark";

export function filterByName({ name, description }: Bookmark, search: string) {
  const searchTerm = search.toLowerCase();

  return (
    name.toLowerCase().includes(searchTerm) ||
    description.toLowerCase().includes(searchTerm)
  );
}

export function filterByTags({ tags }: Bookmark, activeTags: string[]) {
  return !activeTags.length || activeTags.every((tag) => tags.includes(tag));
}
