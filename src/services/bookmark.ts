import { v4 as uuid } from "uuid";
import { getItem, setItem } from "@/utils/storage";
import { Bookmark } from "@/declarations/Bookmark";

const STORAGE_KEY = "tagmark-bookmarks";

function sortByFavorite(prev: Bookmark, next: Bookmark) {
  if (prev.favorite === next.favorite) return 0;
  return prev.favorite ? -1 : 1;
}

export function getBookmarks(): Bookmark[] {
  const bookmarks = getItem<Bookmark[]>(STORAGE_KEY) || [];
  return bookmarks.sort(sortByFavorite);
}

export function createBookmark(data: Omit<Bookmark, "id">): Promise<Bookmark> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = uuid();
        const bookmarks = getBookmarks();
        const newBookmark = { id, ...data };
        setItem<Bookmark[]>(STORAGE_KEY, bookmarks.concat(newBookmark));
        resolve(newBookmark);
      } catch (error) {
        return reject(
          "An error ocurred trying to create your bookmark, try again later"
        );
      }
    }, 2000);
  });
}

export function updateBookmark({
  id,
  ...data
}: { id: string } & Partial<Omit<Bookmark, "id">>): Promise<Bookmark[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const bookmarks = getBookmarks();
        const updatedBookmarks = bookmarks
          .map((bookmark) =>
            bookmark.id === id ? { ...bookmark, ...data } : bookmark
          )
          .sort(sortByFavorite);
        setItem<Bookmark[]>(STORAGE_KEY, updatedBookmarks);
        resolve(updatedBookmarks);
      } catch (error) {
        return reject(
          "An error ocurred trying to update your bookmark, try again later"
        );
      }
    }, 2000);
  });
}

export function deleteBookmark({ id }: { id: string }): Promise<Bookmark[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const bookmarks = getBookmarks();
        const updatedBookmarks = bookmarks
          .filter((bookmark) => bookmark.id !== id)
          .sort(sortByFavorite);
        setItem<Bookmark[]>(STORAGE_KEY, updatedBookmarks);
        resolve(updatedBookmarks);
      } catch (error) {
        return reject(
          "An error ocurred trying to delete your bookmark, try again later"
        );
      }
    }, 2000);
  });
}

export function deleteBookmarkTag({ id }: { id: string }): Promise<Bookmark[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const bookmarks = getBookmarks();
        const updatedBookmarks = bookmarks.map((bookmark) => ({
          ...bookmark,
          tags: bookmark.tags.filter((tagId) => tagId !== id),
        }));
        setItem<Bookmark[]>(STORAGE_KEY, updatedBookmarks);
        resolve(updatedBookmarks);
      } catch (error) {
        return reject(
          "An error ocurred trying to delete tag from your bookmark, try again later"
        );
      }
    }, 2000);
  });
}
