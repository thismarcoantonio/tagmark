<template>
  <top-bar />
  <div class="py-6 p-4">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue';
</script>

<style>
@import 'tailwindcss';

body {
  @apply bg-gray-50 text-gray-900;
}

@theme {
  --color-primary-50: #f5f7ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-primary-800: #3730a3;
  --color-primary-900: #312e81;

  /* Secondary (Lavender Tint) */
  --color-secondary-50: #faf5ff;
  --color-secondary-100: #f3e8ff;
  --color-secondary-200: #e9d5ff;
  --color-secondary-300: #d8b4fe;
  --color-secondary-400: #c084fc;
  --color-secondary-500: #a855f7;
  --color-secondary-600: #9333ea;
  --color-secondary-700: #7e22ce;
  --color-secondary-800: #6b21a8;
  --color-secondary-900: #581c87;

  /* Accent (Amber/Orange) */
  --color-accent-50: #fff8e1;
  --color-accent-100: #ffecb3;
  --color-accent-200: #ffe082;
  --color-accent-300: #ffd54f;
  --color-accent-400: #ffca28;
  --color-accent-500: #ffc107;
  --color-accent-600: #ffb300;
  --color-accent-700: #ffa000;
  --color-accent-800: #ff8f00;
  --color-accent-900: #ff6f00;
}
</style>
