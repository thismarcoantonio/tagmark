<template>
  <div v-if="open" class="fixed top-0 left-0 w-full h-full bg-white z-10">
    <header class="px-4 py-6 flex items-center justify-between">
      <page-title :no-margins="true" h="h2">
        <slot name="title" />
      </page-title>
      <button class="p-1 rounded-full shadow" @click="handleClose">
        <remix-icon icon="close" />
      </button>
    </header>
    <div class="px-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: {
    RemixIcon,
    PageTitle,
  },
})
export default class FilterTags extends Vue {
  @Prop({ default: false })
  open!: boolean;

  handleClose() {
    this.$emit("close");
  }
}
</script>
