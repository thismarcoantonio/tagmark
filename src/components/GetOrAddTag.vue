<template>
  <menu-dropdown
    :items="items"
    :filter-term="search"
    @select="search = typeof $event !== 'string' ? $event.title : $event"
  >
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
import MenuDropdown from '@/components/MenuDropdown.vue';
import TextFieldInput from '@/components/TextFieldInput.vue';
import { useTagsStore } from '@/stores/tags';

const search = defineModel<string>('search', { required: false, default: '' });

const tagsStore = useTagsStore();

const items = computed(() =>
  tagsStore.tags.map(({ id, name }) => ({ value: `${id}`, title: name })),
);

function addTag() {
  tagsStore.addTag(search.value);
  search.value = '';
}
</script>
