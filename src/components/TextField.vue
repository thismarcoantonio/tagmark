<template>
  <label v-if="label" class="block text-sm font-medium text-gray-700 mb-2">
    {{ label }}
    <span v-if="required"> * </span>
  </label>
  <div class="relative mb-4">
    <div v-if="$slots.prepend" class="absolute left-2 top-2">
      <slot name="prepend" />
    </div>
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      :class="{ 'pl-10': $slots.prepend }"
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all pr-4"
    />
    <div v-if="$slots.append" class="absolute right-2 top-2">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string;
  placeholder?: string;
  required?: boolean;
}>();

const modelValue = defineModel({ required: true });
</script>
