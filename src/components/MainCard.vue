<template>
  <div
    class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
  >
    <div>
      {{ title }}
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>
