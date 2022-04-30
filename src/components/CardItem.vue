<template>
  <article class="w-full border border-gray-300 rounded bg-white p-4 relative">
    <h2 class="font-bold text-xl mb-2">{{ card.name }}</h2>
    <button class="absolute top-4 right-4" @click="handleFavorite">
      <remix-icon icon="star" :fill="favorite" />
    </button>
    <ul>
      <li
        :key="tag.id"
        v-for="tag in tags"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {{ tag.name }}
      </li>
    </ul>
    <p class="text-gray-700 text-sm mt-4 line-clamp-3">
      {{ card.description }}
    </p>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";
import { Card } from "@/declarations/Card";

@Component({
  components: {
    RemixIcon,
  },
})
export default class CardItem extends Vue {
  @Prop({ required: true }) card!: Card;
  @Prop({ required: true }) tags!: { id: string; name: string }[];
  @Prop() favorite!: boolean;

  handleFavorite() {
    this.$emit("toggle-favorite", { id: this.card.id });
  }
}
</script>
