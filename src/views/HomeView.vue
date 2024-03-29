<template>
  <div class="home">
    <filter-search />
    <filter-tags />
    <div v-if="bookmarks.length">
      <div v-if="bookmarkList.length" class="md:columns-2 lg:columns-3 gap-4">
        <router-link
          :key="bookmark.id"
          :to="`/bookmark/${bookmark.id}`"
          v-for="bookmark in bookmarkList"
          class="block mb-4 break-inside-avoid"
        >
          <bookmark-item
            :bookmark="bookmark"
            :favorite="bookmark.favorite"
            :tags="getBookmarkTags(bookmark)"
            @toggle-favorite="handleFavorite(bookmark)"
          />
        </router-link>
      </div>
      <span class="text-slate-700" v-if="!bookmarkList.length">
        <i18n path="filters.noResults">
          <template #action>
            <button class="text-lime-600 underline" @click="clearFilters">
              {{ $t("filters.clearYourFilters") }}
            </button>
          </template>
        </i18n>
      </span>
    </div>
    <div class="mt-4 text-slate-700" v-if="!bookmarks.length">
      <i18n path="bookmarks.noResults">
        <template #action>
          <router-link class="text-lime-600 underline" to="/bookmark/create">
            {{ $t("bookmarks.createYourFirst") }}
          </router-link>
        </template>
      </i18n>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State, Getter } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Bookmark } from "@/declarations/Bookmark";
import FilterSearch from "@/components/FilterSearch.vue";
import FilterTags from "@/components/FilterTags.vue";
import BookmarkItem from "@/components/BookmarkItem.vue";

@Component({
  components: {
    FilterSearch,
    FilterTags,
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
  setFavorite!: (payload: { id: string; favorite: boolean }) => Promise<void>;

  @Action("clearFilters", { namespace: "filter" })
  clearFilters!: () => Promise<void>;

  getBookmarkTags(bookmark: Bookmark): Tag[] {
    return this.tags.filter((tag) => bookmark.tags.includes(tag.id));
  }

  handleFavorite({ id, favorite }: { id: string; favorite: boolean }) {
    this.setFavorite({ id, favorite: !favorite });
  }
}
</script>
