<template>
  <div class="home">
    <search-box />
    <div class="grid gap-4 mt-8">
      <tag-card
        id="1"
        title="Headless UI"
        @toggle-favorite="handleFavorite"
        :favorite="true"
        :tags="[
          { id: '1', name: 'React' },
          { id: '2', name: 'Vue' },
        ]"
      />
      <tag-card
        id="2"
        title="Headless UI 2"
        @toggle-favorite="handleFavorite"
        :tags="[
          { id: '1', name: 'React 2' },
          { id: '2', name: 'Vue 3' },
        ]"
      />
      <tag-card
        id="3"
        title="Headless UI 3"
        @toggle-favorite="handleFavorite"
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
import SearchBox from "@/components/SearchBox.vue";
import TagCard from "@/components/TagCard.vue";

@Component({
  components: {
    SearchBox,
    TagCard,
  },
})
export default class HomeView extends Vue {
  handleFavorite($event: { id: string }) {
    console.log($event);
  }
}
</script>
