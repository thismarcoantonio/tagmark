<template>
  <label v-if="label" class="block text-sm font-medium text-gray-700 mb-2">
    {{ label }}
    <span v-if="required">*</span>
  </label>
  <div class="relative mb-4">
    <div v-if="$slots.prepend" class="absolute left-2 top-2">
      <slot name="prepend" />
    </div>
    <text-field-input
      v-model="modelValue"
      :placeholder="placeholder"
      :class="{ 'pl-10': $slots.prepend }"
    />
    <div v-if="$slots.append" class="absolute right-2 top-2">
      <slot name="append" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextFieldInput from '@/components/TextFieldInput.vue';

defineProps<{
  label?: string;
  placeholder?: string;
  required?: boolean;
}>();

const modelValue = defineModel({ required: true });
</script>
