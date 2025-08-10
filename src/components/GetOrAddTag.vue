<template>
  <menu-dropdown :items="items" :filter-term="search" @select="onSelect">
    <text-field-input v-model="search" placeholder="Add or search tags..." />
    <template #empty>
      <button
        class="w-full text-left px-3 py-2 hover:bg-gray-50 text-primary-600 transition-colors cursor-pointer"
        @click="addTag"
      >
        Create tag for "{{ search.trim() }}"
      </button>
    </template>
  </menu-dropdown>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useTagsStore } from '@/stores/tags';
import type { Tag } from '@/types/Tag';
import MenuDropdown, { type Props as MenuDropdownProps } from '@/components/MenuDropdown.vue';
import TextFieldInput from '@/components/TextFieldInput.vue';

const $props = defineProps<{
  insertedTags?: number[];
}>();

const $emit = defineEmits<{
  (event: 'select', value: Tag): void;
}>();

const search = defineModel<string>('search', { required: false, default: '' });

const tagsStore = useTagsStore();

const items = computed(() =>
  tagsStore.tags
    .filter(({ id }) => ($props.insertedTags ? !$props.insertedTags?.includes(id) : true))
    .map(({ id, name }) => ({ value: `${id}`, title: name })),
);

function addTag() {
  tagsStore.addTag(search.value);
  search.value = '';
}

function onSelect(item: MenuDropdownProps['items'][0]) {
  if (typeof item === 'string') {
    search.value = item;
    return;
  }

  search.value = item.title;
  const tag = tagsStore.getTagById(Number(item.value));

  if (!tag) return;

  $emit('select', tag);
}
</script>
