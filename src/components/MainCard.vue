<template>
  <div
    class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
  >
    <div class="flex items-center justify-between px-4 py-3 border-b border-b-gray-200">
      <h3 class="text-xl font-bold">
        {{ title }}
      </h3>
      <slot name="actions" />
    </div>
    <div class="p-6">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>
