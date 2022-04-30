<template>
  <article class="w-full border border-gray-300 rounded bg-white p-4 relative">
    <h2 class="font-bold text-xl mb-2">{{ tag.name }}</h2>
    <button class="absolute top-4 right-4" @click="handleFavorite">
      <remix-icon icon="star" :fill="favorite" />
    </button>
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {{ category.name }}
      </li>
    </ul>
    <p class="text-gray-700 text-sm mt-4 line-clamp-3">
      {{ tag.description }}
    </p>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";
import { Tag } from "@/declarations/Tag";

@Component({
  components: {
    RemixIcon,
  },
})
export default class TagCard extends Vue {
  @Prop({ required: true }) tag!: Tag;
  @Prop({ required: true }) categories!: { id: string; name: string }[];
  @Prop() favorite!: boolean;

  handleFavorite() {
    this.$emit("toggle-favorite", { id: this.tag.id });
  }
}
</script>
