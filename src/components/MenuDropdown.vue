<template>
  <div class="relative">
    <slot />

    <div
      v-if="filterTerm"
      class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto"
    >
      <button
        v-for="item in items"
        :key="typeof item === 'string' ? item : item.value"
        @click="onSelect(item)"
        class="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors"
      >
        {{ typeof item === 'string' ? item : item.title }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  filterTerm?: string;
  items: string[] | { value: string; title: string }[];
}

defineProps<Props>();

function onSelect(item: Props['items'][0]) {
  console.log(item);
}
</script>
