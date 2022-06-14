<template>
  <div>
    <page-title h="h2">
      {{
        isEdit
          ? $t("bookmarks.editBookmark")
          : $t("bookmarks.createNewBookmark")
      }}
    </page-title>
    <form @submit.prevent="handleSubmit">
      <text-field
        name="name"
        class="mb-4"
        v-model="values.name"
        :label="$t('fields.name')"
      />
      <text-field
        class="mb-4"
        :multiple="true"
        name="description"
        v-model="values.description"
        :label="$t('fields.description')"
      />
      <text-field
        name="link"
        class="mb-4"
        v-model="values.link"
        :label="$t('fields.mainLink')"
      />
      <select-field
        class="mb-4"
        name="tags"
        v-model="values.tags"
        :label="$t('fields.tags')"
        :options="tags.map((tag) => ({ label: tag.name, value: tag.id }))"
      />
      <primary-button type="submit" :loading="loading">
        {{ $t("actions.save") }}
      </primary-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import { Bookmark } from "@/declarations/Bookmark";
import PageTitle from "@/components/PageTitle.vue";
import TextField from "@/components/TextField.vue";
import SelectField from "@/components/SelectField.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

@Component({
  components: {
    PageTitle,
    TextField,
    SelectField,
    PrimaryButton,
  },
})
export default class SaveBookmarkView extends Vue {
  loading = false;
  values: Pick<Bookmark, "name" | "description" | "link"> & {
    tags: { label: string; value: string }[];
  } = {
    name: "",
    description: "",
    link: "",
    tags: [],
  };

  @State("bookmarks", { namespace: "bookmark" })
  bookmarks!: Bookmark[];

  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  @Action("setBookmark", { namespace: "bookmark" })
  actionSetBookmark!: (payload: Omit<Bookmark, "id">) => Promise<Bookmark[]>;

  @Action("updateBookmark", { namespace: "bookmark" })
  updateBookmark!: (payload: Bookmark) => Promise<Bookmark[]>;

  get isEdit() {
    return this.$route.path.endsWith("edit");
  }

  async handleSubmit() {
    this.loading = true;

    const values = {
      ...this.values,
      tags: this.values.tags.map((tag) => tag.value),
    };

    if (this.isEdit) {
      await this.updateBookmark({
        ...values,
        id: this.$route.params.id,
      });
      this.$router.push(`/bookmark/${this.$route.params.id}`);
      this.loading = false;
      return null;
    }

    await this.actionSetBookmark(values);
    this.$router.push("/");
    this.loading = false;
    return null;
  }

  created() {
    const bookmark = this.bookmarks.find(
      (bookmark) => bookmark.id === this.$route.params.id
    );
    if (this.isEdit) {
      if (!bookmark) return this.$router.push("/");
      this.values = {
        name: bookmark.name,
        description: bookmark.description,
        link: bookmark.link,
        tags: this.tags
          .filter((tag) => bookmark.tags.includes(tag.id))
          .map((tag) => ({
            label: tag.name,
            value: tag.id,
          })),
      };
    }
  }
}
</script>
