<template>
  <component
    :is="h"
    :class="{ 'mb-6': !noMargins }"
    class="text-xl font-semibold text-gray-900"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

enum HeadingLevel {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
}

@Component
export default class PageTitle extends Vue {
  @Prop() h!: HeadingLevel;

  @Prop() noMargins!: boolean;
}
</script>
