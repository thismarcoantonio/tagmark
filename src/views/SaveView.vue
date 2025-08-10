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
    <div v-for="tagId in form.tags" :key="tagId">
      {{ tagId }}
    </div>
    <p class="text-gray-500">Click suggestions to add existing tags, or create new tags.</p>
  </main-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PlusIcon, XIcon } from 'lucide-vue-next';
import GetOrAddTag from '@/components/GetOrAddTag.vue';
import MainCard from '@/components/MainCard.vue';
import MainButton from '@/components/MainButton.vue';
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
</script>
