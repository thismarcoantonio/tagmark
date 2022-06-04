<template>
  <li
    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TextBadge extends Vue {}
</script>
