<template>
  <top-bar />
  <div class="py-6 p-4">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue';
</script>
