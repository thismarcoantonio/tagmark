import { v4 as uuid } from "uuid";
import { getItem, setItem } from "@/utils/storage";
import { Bookmark } from "@/declarations/Bookmark";

const STORAGE_KEY = "tagmark-bookmarks";

export function getBookmarks(): Bookmark[] {
  return getItem<Bookmark[]>(STORAGE_KEY) || [];
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
        const updatedBookmarks = bookmarks.map((bookmark) =>
          bookmark.id === id ? { ...bookmark, ...data } : bookmark
        );
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
