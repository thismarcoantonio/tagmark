<template>
  <main-card class="mb-4">
    <div class="flex items-center gap-2">
      <!-- Edit state -->
      <template v-if="edit">
        <text-field-input v-model="editValue" />
        <main-button icon variant="secondary" class="ml-auto" @click="confirmEdit">
          <save-icon />
        </main-button>
      </template>
      <template v-else>
        <b>{{ tag.name }}</b>
        <main-button icon variant="secondary" class="ml-auto" @click="handleEdit(tag)">
          <pencil-icon />
        </main-button>
        <main-button icon variant="secondary">
          <trash-icon />
        </main-button>
      </template>
    </div>
  </main-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PencilIcon, TrashIcon, SaveIcon } from 'lucide-vue-next';
import { useTagsStore } from '@/stores/tags';
import type { Tag } from '@/types/Tag';
import MainCard from '@/components/MainCard.vue';
import TextFieldInput from '@/components/TextFieldInput.vue';
import MainButton from '@/components/MainButton.vue';

const $props = defineProps<{
  tag: Tag;
}>();

const tagsStore = useTagsStore();

const edit = ref(false);
const editValue = ref('');

function handleEdit(tag: Tag) {
  edit.value = true;
  editValue.value = tag.name;
}

function confirmEdit() {
  if ($props.tag.name !== editValue.value) {
    tagsStore.updateTag({ ...$props.tag, name: editValue.value });
  }
  edit.value = false;
  editValue.value = '';
}
</script>
