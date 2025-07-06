<template>
  <header
    class="top-bar bg-white shadow-sm sticky top-0 z-50 p-4 overflow-hidden transition-[max-height]"
    :class="isHome ? 'max-h-[170px]' : 'max-h-[63px]'"
  >
    <div class="flex items-center mb-4">
      <router-link v-if="!isHome" to="/">
        <chevron-left-icon :size="24" class="mr-2" />
      </router-link>
      <h1 class="text-2xl text-gray-900"><b class="text-primary-600">Tag</b>Mark</h1>
    </div>

    <menu-dropdown :items="[]" :filter-term="search">
      <text-field v-model="search" placeholder="Search by content or tags...">
        <template #prepend>
          <search-icon class="text-gray-400" />
        </template>
      </text-field>
    </menu-dropdown>
    <div class="mt-2 flex gap-2">
      <main-button to="/create" class="w-full justify-center">
        <template #prepend>
          <plus-icon />
        </template>
        Add mark
      </main-button>
      <main-button class="w-full justify-center" variant="secondary">
        <template #prepend>
          <tag-icon />
        </template>
        Manage tags
      </main-button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { SearchIcon, PlusIcon, TagIcon, ChevronLeftIcon } from 'lucide-vue-next';
import TextField from '@/components/TextField.vue';
import MenuDropdown from '@/components/MenuDropdown.vue';
import MainButton from '@/components/MainButton.vue';

const $route = useRoute();

const search = ref('');

const isHome = computed(() => $route.name === 'home');
</script>

<style scoped>
.top-bar {
  transition: 300ms max-height ease-in-out;
}
</style>
