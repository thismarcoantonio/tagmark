<template>
  <div>
    <page-title h="h2">Manage Tags</page-title>
    <form
      @submit.prevent="handleCreate"
      class="mb-6 flex justify-between gap-3"
    >
      <text-field
        name="tag"
        class="w-full"
        v-model="newTagValue"
        placeholder="Create new tag"
      />
      <primary-button type="submit">Create</primary-button>
    </form>
    <ul>
      <tag-list-item :tag="tag" :key="tag.id" v-for="tag in tags" />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { ActionMethod } from "vuex";
import { Tag } from "@/declarations/Tag";
import PageTitle from "@/components/PageTitle.vue";
import TextField from "@/components/TextField.vue";
import TagListItem from "@/components/TagListItem.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

@Component({
  components: {
    PageTitle,
    TextField,
    TagListItem,
    PrimaryButton,
  },
})
export default class TagListView extends Vue {
  newTagValue = "";

  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  @Action("saveTag", { namespace: "tag" })
  saveTag!: ActionMethod;

  handleCreate() {
    if (!this.newTagValue) return null;
    this.saveTag({ name: this.newTagValue });
    this.newTagValue = "";
  }
}
</script>
