<template>
  <a
    :href="link"
    target="_blank"
    class="flex items-center justify-between text-sky-600 bg-gray-200 rounded-md p-3"
  >
    <span class="truncate pr-4">{{ link }}</span>
    <input type="hidden" :value="link" />
    <button @click.prevent="handleCopy" class="bg-white p-1 rounded">
      <remix-icon icon="file-copy" />
    </button>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class HyperlinkCard extends Vue {
  @Prop({ required: true }) link!: string;

  async handleCopy() {
    await navigator.clipboard.writeText(this.link);
  }
}
</script>
