import { defineStore } from 'pinia';
import { useStorage } from '@/helpers/useStorage';

export const useTagsStore = defineStore('tags', () => {
  const index = useStorage<number>('tags_index', 0);
  const tags = useStorage<{ id: number; name: string }[]>('tags', []);

  function addTag(value: string) {
    // Increase index to be used as id
    index.value += 1;

    tags.value?.push({ id: index.value, name: value.trim() });
  }

  return { tags, addTag };
});
