<template>
  <div class="home">
    <search-box />
    <div class="grid gap-4 my-8">
      <card-item
        :card="card"
        :key="card.id"
        v-for="card in cards"
        @toggle-favorite="handleFavorite"
        :favorite="true"
        :tags="tags.filter((tag) => card.tags.includes(tag.id))"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Card } from "@/declarations/Card";
import SearchBox from "@/components/SearchBox.vue";
import CardItem from "@/components/CardItem.vue";

@Component({
  components: {
    SearchBox,
    CardItem,
  },
})
export default class HomeView extends Vue {
  @State("cards", { namespace: "card" }) cards!: Card[];
  @State("tags", { namespace: "tag" }) tags!: Tag[];

  handleFavorite($event: { id: string }) {
    console.log($event);
  }
}
</script>
