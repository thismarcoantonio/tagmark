<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 p-4">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">TagMark</h1>
    <menu-dropdown :items="[]" :filter-term="search">
      <text-field v-model="search" placeholder="Search by content or tags...">
        <template #prepend>
          <search-icon class="text-gray-400" />
        </template>
      </text-field>
    </menu-dropdown>
    <div class="mt-2 flex gap-2">
      <main-button class="justify-center">
        <template #prepend>
          <plus-icon />
        </template>
        Add item
      </main-button>
      <main-button class="justify-center" variant="secondary">
        <template #prepend>
          <tag-icon />
        </template>
        Add item
      </main-button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SearchIcon, PlusIcon, TagIcon } from 'lucide-vue-next';
import TextField from '@/components/TextField.vue';
import MenuDropdown from '@/components/MenuDropdown.vue';
import MainButton from '@/components/MainButton.vue';

const search = ref('');
</script>
