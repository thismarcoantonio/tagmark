<template>
  <menu-dropdown :items="items" :filter-term="searchValue">
    <input
      v-model="searchValue"
      placeholder="Add or search tags..."
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all pr-4"
    />
    <template #empty>
      <button
        class="w-full text-left px-3 py-2 hover:bg-gray-50 text-primary-600 transition-colors cursor-pointer"
        @click="tagsStore.addTag(searchValue)"
      >
        Create tag for "{{ searchValue }}"
      </button>
    </template>
  </menu-dropdown>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import MenuDropdown from '@/components/MenuDropdown.vue';
import { useTagsStore } from '@/stores/tags';

const tagsStore = useTagsStore();

const searchValue = ref('');

const items = computed(() =>
  tagsStore.tags.map(({ id, name }) => ({ value: `${id}`, title: name })),
);
</script>
