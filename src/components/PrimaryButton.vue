<template>
  <button
    :type="type"
    @click="handleButtonClick"
    class="bg-lime-600 hover:bg-lime-700 hover:border-lime-700 focus:bg-lime-700 focus:outline-none border border-2 border-lime-600 focus:border-lime-900 rounded px-4 py-2 text-sm text-white font-bold drop-shadow-md hover:drop-shadow"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PrimaryButton extends Vue {
  @Prop() type = "button";

  handleButtonClick() {
    this.$emit("click");
  }
}
</script>
