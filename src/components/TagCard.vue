<template>
  <article class="w-full border border-gray-300 rounded bg-white p-4 relative">
    <h2 class="font-bold text-xl mb-2">{{ title }}</h2>
    <button class="absolute top-4 right-4" @click="handleFavorite">
      <remix-icon icon="star" :fill="favorite" />
    </button>
    <ul>
      <li
        v-for="tag in tags"
        :key="tag.id"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {{ tag.name }}
      </li>
    </ul>
    <p class="text-gray-700 text-sm mt-4 line-clamp-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
      nihil.
    </p>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Tag } from "@/declarations/Tag";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class TagCard extends Vue {
  @Prop({ required: true }) id!: string;
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) tags!: Tag[];
  @Prop() favorite!: boolean;

  handleFavorite() {
    this.$emit("toggle-favorite", { id: this.id });
  }
}
</script>
