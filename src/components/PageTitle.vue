<template>
  <component class="text-xl font-semibold mb-6 text-gray-900" :is="h">
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
}
</script>
