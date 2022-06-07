<template>
  <div class="home">
    <search-box :readonly="true" />
    <div v-if="bookmarks.length" class="grid gap-4 my-8">
      <template v-if="bookmarkList.length">
        <router-link
          :key="bookmark.id"
          :to="`/bookmark/${bookmark.id}`"
          v-for="bookmark in bookmarkList"
        >
          <bookmark-item
            :bookmark="bookmark"
            :favorite="bookmark.favorite"
            :tags="getBookmarkTags(bookmark)"
            @toggle-favorite="handleFavorite(bookmark)"
          />
        </router-link>
      </template>
      <span class="text-slate-700" v-if="!bookmarkList.length">
        Your active filters didn't match any bookmark. Update or clear your
        filters.
      </span>
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
import { Action, State, Getter } from "vuex-class";
import { ActionMethod } from "vuex";
import { Tag } from "@/declarations/Tag";
import { Bookmark } from "@/declarations/Bookmark";
import SearchBox from "@/components/SearchBox.vue";
import BookmarkItem from "@/components/BookmarkItem.vue";

@Component({
  components: {
    SearchBox,
    BookmarkItem,
  },
})
export default class HomeView extends Vue {
  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  @State("bookmarks", { namespace: "bookmark" })
  bookmarks!: Bookmark[];

  @Getter("bookmarkList", { namespace: "bookmark" })
  bookmarkList!: Bookmark[];

  @Action("setFavorite", { namespace: "bookmark" })
  setFavorite!: ActionMethod;

  getBookmarkTags(bookmark: Bookmark): Tag[] {
    return this.tags.filter((tag) => bookmark.tags.includes(tag.id));
  }

  handleFavorite({ id, favorite }: { id: string; favorite: boolean }) {
    this.setFavorite({ id, favorite: !favorite });
  }
}
</script>
