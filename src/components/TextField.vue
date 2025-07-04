<template>
  <label v-if="label" class="block text-sm font-medium text-gray-700 mb-2">
    {{ label }}
  </label>
  <div class="relative">
    <div v-if="$slots.prepend" class="absolute left-2">
      <slot name="prepend" />
    </div>
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      :class="{ 'pl-10': $slots.prepend }"
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all pr-4"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string;
  placeholder?: string;
}>();

const modelValue = defineModel({ required: true });
</script>
