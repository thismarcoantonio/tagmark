<template>
  <div class="home">
    <search-box />
    <div class="grid gap-4 mt-8">
      <card-item
        :card="card"
        :key="card.id"
        v-for="card in cards"
        @toggle-favorite="handleFavorite"
        :favorite="true"
        :tags="[
          { id: '1', name: 'React' },
          { id: '2', name: 'Vue' },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Card } from "@/declarations/Card";
import SearchBox from "@/components/SearchBox.vue";
import CardItem from "@/components/CardItem.vue";

const CardModule = namespace("card");

@Component({
  components: {
    SearchBox,
    CardItem,
  },
})
export default class HomeView extends Vue {
  @CardModule.State("cards") cards!: Card[];

  handleFavorite($event: { id: string }) {
    console.log($event);
  }
}
</script>
