<template>
  <empty-state
    v-if="!items.length"
    title="No marks yet"
    description="Create your first mark to get started"
  >
    <template #prepend>
      <file-text-icon :size="48" class="mb-4" />
    </template>
    <template #append>
      <main-button to="/create">Create first mark</main-button>
    </template>
  </empty-state>
</template>

<script lang="ts" setup>
import { FileTextIcon } from 'lucide-vue-next';
import MainButton from '@/components/MainButton.vue';
import EmptyState from '@/components/EmptyState.vue';

const items: string[] = [];
</script>
