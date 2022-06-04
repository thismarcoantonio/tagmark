<template>
  <div class="home">
    <search-box />
    <div v-if="bookmarks.length" class="grid gap-4 my-8">
      <bookmark-item
        :bookmark="bookmark"
        :key="bookmark.id"
        :favorite="bookmark.favorite"
        :tags="tags.filter((tag) => bookmark.tags.includes(tag.id))"
        @toggle-favorite="handleFavorite(bookmark)"
        v-for="bookmark in bookmarks"
      />
    </div>
    <div class="mt-4 text-slate-700" v-if="!bookmarks.length">
      Looks like you didn't create any Bookmark yet,
      <router-link class="text-lime-600 underline" to="/new-bookmark">
        go ahead and create your first!
      </router-link>
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
