<template>
  <div v-if="bookmark">
    <page-title class="flex items-center justify-between" h="h2">
      {{ bookmark.name }}
      <dropdown-menu :options="menuOptions" @option-click="handleMenuClick">
        <template #action="{ click }">
          <button @click="click" class="hover:bg-gray-200 rounded-full p-1">
            <remix-icon :size="24" icon="more" />
          </button>
        </template>
      </dropdown-menu>
    </page-title>
    <p class="text-slate-500">{{ bookmark.description }}</p>
    <ul class="mt-6">
      <text-badge v-for="tag in bookmarkTags" :key="tag">
        {{ tag }}
      </text-badge>
    </ul>
    <hyperlink-card class="mt-6" :link="bookmark.link" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Bookmark } from "@/declarations/Bookmark";
import PageTitle from "@/components/PageTitle.vue";
import RemixIcon from "@/components/RemixIcon.vue";
import TextBadge from "@/components/TextBadge.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";
import HyperlinkCard from "@/components/HyperlinkCard.vue";
import { DropdownOption } from "@/declarations/DropdownOption";
import { IconTypes } from "@/declarations/IconTypes";

@Component({
  components: {
    PageTitle,
    RemixIcon,
    TextBadge,
    DropdownMenu,
    HyperlinkCard,
  },
})
export default class BookmarkView extends Vue {
  @State("bookmarks", { namespace: "bookmark" })
  bookmarks!: Bookmark[];

  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  @Action("deleteBookmark", { namespace: "bookmark" })
  deleteBookmark!: (payload: { id: string }) => Promise<Bookmark[]>;

  get menuOptions(): DropdownOption[] {
    return [
      {
        key: "edit",
        icon: IconTypes.edit,
        label: this.$t("bookmarks.editBookmark"),
      },
      {
        key: "delete",
        icon: IconTypes.delete,
        label: this.$t("bookmarks.deleteBookmark"),
      },
    ];
  }

  get bookmark(): Bookmark | undefined {
    return this.bookmarks.find(
      (bookmark) => bookmark.id === this.$route.params.id
    );
  }

  get bookmarkTags(): Tag["name"][] {
    return this.tags
      .filter((tag) => this.bookmark?.tags.includes(tag.id))
      .map((tag) => tag.name);
  }

  handleMenuClick(key: string) {
    if (key === "edit") return this.handleEdit();
    if (key === "delete") return this.handleDelete();
  }

  handleEdit() {
    this.$router.push(`/bookmark/${this.bookmark?.id}/edit`);
  }

  async handleDelete() {
    await this.deleteBookmark({ id: this.bookmark?.id || "" });
    this.$router.push("/");
  }

  created() {
    if (!this.bookmark) {
      return this.$router.push("/");
    }
  }
}
</script>
