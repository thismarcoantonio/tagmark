<template>
  <menu-dropdown :items="items" :filter-term="searchValue">
    <text-field-input v-model="searchValue" placeholder="Add or search tags..." />
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
import TextFieldInput from '@/components/TextFieldInput.vue';
import { useTagsStore } from '@/stores/tags';

const tagsStore = useTagsStore();

const searchValue = ref('');

const items = computed(() =>
  tagsStore.tags.map(({ id, name }) => ({ value: `${id}`, title: name })),
);
</script>
