import { defineStore } from 'pinia';
import { useStorage } from '@/helpers/useStorage';
import type { Tag } from '@/types/Tag';

export const useTagsStore = defineStore('tags', () => {
  const index = useStorage<number>('tags_index', 0);
  const tags = useStorage<Tag[]>('tags', []);

  function addTag(value: Tag['name']) {
    // Increase index to be used as id
    index.value += 1;
    tags.value?.push({ id: index.value, name: value.trim() });
  }

  function updateTag(tag: Tag) {
    const tagIndex = tags.value.findIndex(({ id }) => tag.id === id);

    if (tagIndex < 0) throw Error('Tag not found');

    tags.value = [...tags.value.slice(0, tagIndex), tag, ...tags.value.slice(tagIndex + 1)];
  }

  function deleteTag(tag: Tag) {
    const tagIndex = tags.value.findIndex(({ id }) => tag.id === id);

    if (tagIndex < 0) throw Error('Tag not found');

    tags.value = [...tags.value.slice(0, tagIndex), ...tags.value.slice(tagIndex + 1)];
  }

  return { tags, addTag, updateTag, deleteTag };
});
