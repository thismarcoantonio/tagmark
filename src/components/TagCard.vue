<template>
  <main-card class="mb-4">
    <div class="flex items-center gap-2">
      <!-- Edit state -->
      <template v-if="action === 'edit'">
        <text-field-input v-model="editValue" />
        <main-button icon variant="secondary" class="ml-auto" @click="confirmEdit">
          <save-icon />
        </main-button>
      </template>

      <!-- View state -->
      <template v-else>
        <b>{{ tag.name }}</b>
        <main-button icon variant="secondary" class="ml-auto" @click="handleEdit(tag)">
          <pencil-icon />
        </main-button>
        <main-button icon variant="secondary" @click="handleDelete">
          <trash-icon />
        </main-button>
        <main-modal
          title="Delete tag"
          :open="action === 'delete'"
          @update:open="action = undefined"
        >
          Do you really wish to delete tag <b>"{{ tag.name }}"</b>?
          <div class="mt-4 justify-end flex gap-2">
            <main-button variant="secondary" @click="action = undefined">Cancel</main-button>
            <main-button @click="confirmDelete">Confirm</main-button>
          </div>
        </main-modal>
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
import MainModal from '@/components/MainModal.vue';

const $props = defineProps<{
  tag: Tag;
}>();

const tagsStore = useTagsStore();

const action = ref<'edit' | 'delete'>();
const editValue = ref('');

function handleEdit(tag: Tag) {
  action.value = 'edit';
  editValue.value = tag.name;
}

function confirmEdit() {
  if ($props.tag.name !== editValue.value) {
    tagsStore.updateTag({ ...$props.tag, name: editValue.value });
  }
  action.value = undefined;
  editValue.value = '';
}

function handleDelete() {
  action.value = 'delete';
}

function confirmDelete() {
  tagsStore.deleteTag($props.tag);
}
</script>
