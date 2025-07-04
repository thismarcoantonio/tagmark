<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 p-4">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">TagMark</h1>
    <menu-dropdown :items="[]" :filter-term="search">
      <text-field v-model="search" placeholder="Search by content or tags..." />
    </menu-dropdown>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TextField from '@/components/TextField.vue';
import MenuDropdown from '@/components/MenuDropdown.vue';

const search = ref('');
</script>
