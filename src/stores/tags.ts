import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useStorage } from '@/helpers/useStorage';
import type { Tag } from '@/types/Tag';

export const useTagsStore = defineStore('tags', () => {
  const index = useStorage<number>('tags_index', 0);
  const tags = useStorage<{ [id: Tag['id']]: Tag }>('tags', []);

  function addTag(value: Tag['name']) {
    // Increase index to be used as id
    index.value += 1;
    tags.value[index.value] = { id: index.value, name: value };
  }

  function getTagById(id: Tag['id']) {
    return tags.value[id];
  }

  function updateTag(tag: Tag) {
    if (!tags.value[tag.id]) throw Error('Tag not found');
    tags.value[tag.id] = tag;
  }

  function deleteTag(tag: Tag) {
    if (!tags.value[tag.id]) throw Error('Tag not found');
    delete tags.value[tag.id];
  }

  const tagsList = computed(() => Object.values(tags.value));

  return { tags: tagsList, addTag, getTagById, updateTag, deleteTag };
});
