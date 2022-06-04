<template>
  <remix-icon :size="20" icon="loader" class="animate-spin" />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class Loader extends Vue {}
</script>
