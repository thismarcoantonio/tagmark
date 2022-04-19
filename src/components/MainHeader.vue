<template>
  <header class="px-4 py-6 flex justify-between items-center">
    <h1 class="font-bold text-lg">
      <span class="text-lime-600">Tag</span>Mark
    </h1>
    <remix-icon icon="menu" class="text-lime-600 cursor-pointer" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RemixIcon from "./RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class MainHeader extends Vue {}
</script>
