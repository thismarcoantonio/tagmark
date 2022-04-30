import { Tag } from "@/declarations/Tag";
import { v4 as uuid } from "uuid";
import { getItem, setItem } from "@/utils/storage";

const STORAGE_KEY = "tagmark-tags";

export function createTag(data: Omit<Tag, "id">): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = uuid();
        const tags = getItem<Tag[]>(STORAGE_KEY) || [];
        setItem<Tag[]>(STORAGE_KEY, tags.concat({ id, ...data }));
        resolve();
      } catch (error) {
        return reject(
          "An error ocurred trying to create your tag, try again later"
        );
      }
    }, 2000);
  });
}
