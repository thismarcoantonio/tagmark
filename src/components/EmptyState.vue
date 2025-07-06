<template>
  <div class="flex flex-col items-center py-12">
    <slot name="prepend" />
    <h3 class="mb-1 text-xl font-bold text-gray-900">{{ title }}</h3>
    <p class="mb-4 text-md text-gray-500">{{ description }}</p>
    <slot name="append" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
}>();
</script>
