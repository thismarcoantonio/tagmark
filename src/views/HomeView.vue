<template>
  <div class="home">
    <search-box />
    <div class="grid gap-4 my-8">
      <card-item
        :card="card"
        :key="card.id"
        :favorite="card.favorite"
        :tags="tags.filter((tag) => card.tags.includes(tag.id))"
        @toggle-favorite="handleFavorite(card)"
        v-for="card in cards"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Card } from "@/declarations/Card";
import SearchBox from "@/components/SearchBox.vue";
import CardItem from "@/components/CardItem.vue";
import { ActionMethod } from "vuex";

@Component({
  components: {
    SearchBox,
    CardItem,
  },
})
export default class HomeView extends Vue {
  @State("cards", { namespace: "card" }) cards!: Card[];
  @State("tags", { namespace: "tag" }) tags!: Tag[];

  @Action("setFavorite", { namespace: "card" })
  setFavorite!: ActionMethod;

  handleFavorite({ id, favorite }: { id: string; favorite: boolean }) {
    this.setFavorite({ id, favorite: !favorite });
  }
}
</script>
