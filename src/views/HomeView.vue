<template>
  <div class="home">
    <search-box />
    <div class="grid gap-4 mt-8">
      <tag-card
        :tag="tag"
        :key="tag.id"
        v-for="tag in tags"
        @toggle-favorite="handleFavorite"
        :favorite="true"
        :categories="[
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
import { Tag } from "@/declarations/Tag";
import SearchBox from "@/components/SearchBox.vue";
import TagCard from "@/components/TagCard.vue";

const TagModule = namespace("tag");

@Component({
  components: {
    SearchBox,
    TagCard,
  },
})
export default class HomeView extends Vue {
  @TagModule.State("tags") tags!: Tag[];

  handleFavorite($event: { id: string }) {
    console.log($event);
  }
}
</script>
