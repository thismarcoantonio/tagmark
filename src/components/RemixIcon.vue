<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-if="icon === IconTypes.menu">
      <path fill="transparent" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
      />
    </template>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconTypes } from "@/declarations/IconTypes";

@Component
export default class RemixIcon extends Vue {
  @Prop() icon!: IconTypes;

  IconTypes = IconTypes;
}
</script>
