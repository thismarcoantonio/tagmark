<template>
  <main-card title="Create mark">
    <template #actions>
      <main-button>Save</main-button>
    </template>
    <text-field v-model="form.title" label="Title" placeholder="Enter title" required />
    <text-field
      v-model="form.title"
      label="Description"
      placeholder="Enter description"
      multiline
    />
    <text-field
      v-for="(link, index) in form.links"
      :key="index"
      v-model="form.links[index]"
      :label="!index ? 'Links' : ''"
      placeholder="https://example.com"
    >
      <template v-if="index > 0" #append>
        <x-icon class="cursor-pointer" @click="removeLink(index)" />
      </template>
    </text-field>
    <main-button variant="secondary" full-width class="mb-4" @click="addNewLink">
      <template #prepend>
        <plus-icon />
      </template>
      Add new link
    </main-button>
    <get-or-add-tag v-model:search="tag" :inserted-tags="form.tags" class="mb-4" @select="addTag" />
    <ul class="flex flex-wrap gap-2 mb-4">
      <main-tag v-for="tagId in form.tags" :key="tagId" :tag-id="tagId" @delete="deleteTag" />
    </ul>
    <p class="text-gray-500">Click suggestions to add existing tags, or create new tags.</p>
  </main-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PlusIcon, XIcon } from 'lucide-vue-next';
import GetOrAddTag from '@/components/GetOrAddTag.vue';
import MainCard from '@/components/MainCard.vue';
import MainButton from '@/components/MainButton.vue';
import MainTag from '@/components/MainTag.vue';
import TextField from '@/components/TextField.vue';
import type { Tag } from '@/types/Tag';

const form = ref<{
  title: string;
  description: string;
  links: string[];
  tags: number[];
}>({
  title: '',
  description: '',
  links: [''],
  tags: [],
});

const tag = ref('');

function addNewLink() {
  form.value.links.push('');
}

function removeLink(index: number) {
  form.value.links = [...form.value.links.slice(0, index), ...form.value.links.slice(index + 1)];
}

function addTag({ id }: Tag) {
  form.value.tags.push(id);
  tag.value = '';
}

function deleteTag(tagId: number) {
  const tagIdIndex = form.value.tags.indexOf(tagId);
  if (tagIdIndex < 0) return;

  form.value.tags = [
    ...form.value.tags.slice(0, tagIdIndex),
    ...form.value.tags.slice(tagIdIndex + 1),
  ];
}
</script>
