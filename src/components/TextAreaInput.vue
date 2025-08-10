<template>
  <textarea
    v-model="modelValue"
    :placeholder="placeholder"
    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all pr-4 h-32 resize-none"
  />
</template>

<script lang="ts" setup>
defineProps<{
  placeholder?: string;
}>();

const modelValue = defineModel<string>({ required: true });
</script>
