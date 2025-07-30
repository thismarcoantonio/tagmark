<template>
  <transition>
    <div
      v-if="open"
      class="fixed top-0 bottom-0 left-0 right-0 z-100 flex justify-center items-center opacity-100 translate-y-0"
    >
      <div class="w-full h-full bg-black opacity-10" @click="open = false" />
      <main-card class="absolute w-11/12" :title="title">
        <slot />
      </main-card>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import MainCard from '@/components/MainCard.vue';

defineProps<{
  title?: string;
}>();

const open = defineModel<boolean>('open');
</script>

<style scoped>
@reference '@/app.css';

.v-enter-active,
.v-leave-active {
  @apply duration-300;
  transition-property: transform opacity;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0 -translate-y-2;
}
</style>
