<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="flex cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="{
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500':
        !variant || variant === 'primary',
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500': variant === 'secondary',
      'w-full justify-center': fullWidth,
    }"
  >
    <div v-if="$slots.prepend" class="mr-2">
      <slot name="prepend" />
    </div>
    <slot />
    <div v-if="$slots.append" class="ml-2">
      <slot name="append" />
    </div>
  </component>
</template>

<script lang="ts" setup>
import type { RouterLinkProps } from 'vue-router';

defineProps<{
  fullWidth?: boolean;
  to?: RouterLinkProps['to'];
  variant?: 'primary' | 'secondary';
}>();
</script>
