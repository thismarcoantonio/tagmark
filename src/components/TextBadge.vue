<template>
  <li
    @click="handleClick"
    :class="{
      'bg-gray-200': !outlined,
      'border border-gray-400': outlined,
      'cursor-pointer': isButton,
    }"
    class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextBadge extends Vue {
  @Prop({ default: false }) outlined!: boolean;

  get isButton() {
    return !!this.$listeners.click;
  }

  handleClick() {
    this.$emit("click");
  }
}
</script>
