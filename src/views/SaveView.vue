<template>
  <main-card title="Create mark">
    <template #actions>
      <main-button>Save</main-button>
    </template>
    <text-field v-model="form.title" label="Title" placeholder="Enter title" required />
    <text-field v-model="form.title" label="Description" placeholder="Enter description" />
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
    <text-field v-model="form.title" label="Tags" placeholder="Add or search tags..." required />
    <p class="text-gray-500">
      Press Enter or comma to add tags. Click suggestions to add existing tags.
    </p>
  </main-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PlusIcon, XIcon } from 'lucide-vue-next';
import MainCard from '@/components/MainCard.vue';
import MainButton from '@/components/MainButton.vue';
import TextField from '@/components/TextField.vue';

const form = ref({
  title: '',
  description: '',
  links: [''],
});

function addNewLink() {
  form.value.links.push('');
}

function removeLink(index: number) {
  form.value.links = [...form.value.links.slice(0, index), ...form.value.links.slice(index + 1)];
}
</script>
