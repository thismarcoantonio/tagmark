<template>
  <main-card title="Manage tags" class="mb-6">
    <get-or-add-tag />
  </main-card>

  <empty-state
    v-if="!tagsStore.tags.length"
    title="No tags yet"
    description="Create your first tag above to start organizing your saved items"
  >
    <template #prepend>
      <tag-icon :size="48" class="mb-4 text-primary-600" />
    </template>
  </empty-state>

  <template v-if="tagsStore.tags.length">
    <tag-card v-for="tag in tagsStore.tags" :key="tag.id" :tag="tag" />
  </template>
</template>

<script lang="ts" setup>
import { TagIcon } from 'lucide-vue-next';
import { useTagsStore } from '@/stores/tags';
import MainCard from '@/components/MainCard.vue';
import GetOrAddTag from '@/components/GetOrAddTag.vue';
import EmptyState from '@/components/EmptyState.vue';
import TagCard from '@/components/TagCard.vue';

const tagsStore = useTagsStore();
</script>
