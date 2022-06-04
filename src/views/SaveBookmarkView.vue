<template>
  <div>
    <page-title h="h2">Create new Bookmark</page-title>
    <form @submit.prevent="handleSubmit">
      <text-field v-model="values.name" name="name" label="Name" class="mb-4" />
      <text-field
        class="mb-4"
        :multiple="true"
        name="description"
        label="Description"
        v-model="values.description"
      />
      <text-field
        name="link"
        class="mb-4"
        label="Main link"
        v-model="values.link"
      />
      <select-field
        class="mb-4"
        label="Tags"
        name="tags"
        v-model="values.tags"
        :options="tags.map((tag) => ({ label: tag.name, value: tag.id }))"
      />
      <primary-button type="submit" :loading="loading">Submit</primary-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { ActionMethod } from "vuex";
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
  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  @Action("setBookmark", { namespace: "bookmark" })
  actionSetBookmark!: ActionMethod;

  values: Pick<Bookmark, "name" | "description" | "link"> & {
    tags: { label: string; value: string }[];
  } = {
    name: "",
    description: "",
    link: "",
    tags: [],
  };

  loading = false;

  async handleSubmit() {
    this.loading = true;
    await this.actionSetBookmark({
      ...this.values,
      tags: this.values.tags.map((tag) => tag.value),
    });
    this.loading = false;
    this.$router.push("/");
  }
}
</script>
