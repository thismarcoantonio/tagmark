import { v4 as uuid } from "uuid";
import { getItem, setItem } from "@/utils/storage";
import { Tag } from "@/declarations/Tag";

const STORAGE_KEY = "tagmark-tags";

export function getTags(): Tag[] {
  return getItem<Tag[]>(STORAGE_KEY) || [];
}

export function createTag(data: Omit<Tag, "id">): Promise<Tag[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const id = uuid();
        const tags = getTags();
        const updatedTags = [{ id, ...data }, ...tags];
        setItem<Tag[]>(STORAGE_KEY, updatedTags);
        resolve(updatedTags);
      } catch (error) {
        return reject(
          "An error ocurred trying to create your tag, try again later"
        );
      }
    }, 2000);
  });
}

export function updateTag(tag: Tag): Promise<Tag[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const tags = getTags();
        const updatedTags = tags.map((currentTag) =>
          currentTag.id === tag.id ? tag : currentTag
        );
        setItem<Tag[]>(STORAGE_KEY, updatedTags);
        resolve(updatedTags);
      } catch (error) {
        return reject("An error ocurred updating your tag, try again later");
      }
    }, 2000);
  });
}

export function deleteTag({ id }: { id: string }): Promise<Tag[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const tags = getTags();
        const updatedTags = tags.filter((currentTag) => currentTag.id !== id);
        setItem<Tag[]>(STORAGE_KEY, updatedTags);
        resolve(updatedTags);
      } catch (error) {
        return reject("An error ocurred deleting your tag, try again later");
      }
    }, 2000);
  });
}
