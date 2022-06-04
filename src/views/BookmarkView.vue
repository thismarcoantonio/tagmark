<template>
  <div>
    <page-title h="h2">{{ bookmark.name }}</page-title>
    <p class="text-slate-500">{{ bookmark.description }}</p>
    <ul class="mt-6">
      <text-badge v-for="tagId in bookmark.tags" :key="tagId">
        {{ getTagName(tagId) }}
      </text-badge>
    </ul>
    <hyperlink-card class="mt-6" :link="bookmark.link" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Bookmark } from "@/declarations/Bookmark";
import PageTitle from "@/components/PageTitle.vue";
import TextBadge from "@/components/TextBadge.vue";
import HyperlinkCard from "@/components/HyperlinkCard.vue";

@Component({
  components: {
    PageTitle,
    TextBadge,
    HyperlinkCard,
  },
})
export default class BookmarkView extends Vue {
  @State("bookmarks", { namespace: "bookmark" })
  bookmarks!: Bookmark[];

  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  bookmark?: Bookmark;

  getTagName(id: string) {
    const tag = this.tags.find((tag) => tag.id === id);
    return tag?.name;
  }

  created() {
    this.bookmark = this.bookmarks.find(
      (bookmark) => bookmark.id === this.$route.params.id
    );
    if (!this.bookmark) {
      return this.$router.push("/");
    }
  }
}
</script>
