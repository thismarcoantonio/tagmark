<template>
  <main-card title="Manage tags">
    <text-field v-model="newValue" placeholder="Add or search tags..." />
  </main-card>

  <empty-state
    v-if="!items.length"
    title="No tags yet"
    description="Create your first tag above to start organizing your saved items"
  >
    <template #prepend>
      <tag-icon :size="48" class="mb-4 text-primary-600" />
    </template>
  </empty-state>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TagIcon } from 'lucide-vue-next';
import MainCard from '@/components/MainCard.vue';
import TextField from '@/components/TextField.vue';
import EmptyState from '@/components/EmptyState.vue';

const newValue = ref('');
const items: string[] = [];
</script>
