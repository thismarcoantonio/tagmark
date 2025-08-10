<template>
  <li class="flex items-center gap-2 bg-gray-200 py-1 px-3 rounded-full">
    {{ tag.name }}
    <button @click="$emit('delete', tagId)">
      <x-icon :size="16" />
    </button>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { XIcon } from 'lucide-vue-next';
import { useTagsStore } from '@/stores/tags';

const $props = defineProps<{
  tagId: number;
}>();

defineEmits<{
  (event: 'delete', tagId: number): void;
}>();

const tagsStore = useTagsStore();

const tag = computed(() => tagsStore.getTagById($props.tagId)!);
</script>
