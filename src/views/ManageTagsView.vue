<template>
  <main-card title="Manage tags" class="mb-6">
    <get-or-add-tag v-model:search="search" />
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

  <empty-state
    v-if="tagsStore.tags.length && !filteredTags.length"
    title="No tags with this filter"
    description="Update or clear your search above"
  >
    <template #prepend>
      <badge-question-mark-icon :size="48" class="mb-4 text-primary-600" />
    </template>
    <template #append>
      <main-button variant="secondary" @click="search = ''">Clear search</main-button>
    </template>
  </empty-state>

  <template v-if="filteredTags.length">
    <tag-card v-for="tag in filteredTags" :key="tag.id" :tag="tag" />
  </template>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { TagIcon, BadgeQuestionMarkIcon } from 'lucide-vue-next';
import { useTagsStore } from '@/stores/tags';
import MainCard from '@/components/MainCard.vue';
import GetOrAddTag from '@/components/GetOrAddTag.vue';
import EmptyState from '@/components/EmptyState.vue';
import TagCard from '@/components/TagCard.vue';
import MainButton from '@/components/MainButton.vue';

const tagsStore = useTagsStore();

const search = ref('');

const filteredTags = computed(() => {
  if (!search.value) return tagsStore.tags;
  return tagsStore.tags.filter((item) =>
    item.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
  );
});
</script>
