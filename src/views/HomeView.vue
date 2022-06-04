<template>
  <div class="home">
    <search-box />
    <div class="grid gap-4 my-8">
      <bookmark-item
        :bookmark="bookmark"
        :key="bookmark.id"
        :favorite="bookmark.favorite"
        :tags="tags.filter((tag) => bookmark.tags.includes(tag.id))"
        @toggle-favorite="handleFavorite(bookmark)"
        v-for="bookmark in bookmarks"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Bookmark } from "@/declarations/Bookmark";
import SearchBox from "@/components/SearchBox.vue";
import BookmarkItem from "@/components/BookmarkItem.vue";
import { ActionMethod } from "vuex";

@Component({
  components: {
    SearchBox,
    BookmarkItem,
  },
})
export default class HomeView extends Vue {
  @State("bookmarks", { namespace: "bookmark" }) bookmarks!: Bookmark[];
  @State("tags", { namespace: "tag" }) tags!: Tag[];

  @Action("setFavorite", { namespace: "bookmark" })
  setFavorite!: ActionMethod;

  handleFavorite({ id, favorite }: { id: string; favorite: boolean }) {
    this.setFavorite({ id, favorite: !favorite });
  }
}
</script>
