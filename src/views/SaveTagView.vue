<template>
  <div>
    <page-title h="h2">Create new tag</page-title>
    <form @submit.prevent="handleSubmit">
      <text-field v-model="values.name" name="name" label="Name" />
      <text-field
        :multiple="true"
        name="description"
        label="Description"
        v-model="values.description"
      />
      <text-field v-model="values.link" name="link" label="Main link" />
      <primary-button type="submit">Submit</primary-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue";
import TextField from "@/components/TextField.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import { createTag } from "@/services/tag";
import { Tag } from "@/declarations/Tag";

@Component({
  components: {
    PageTitle,
    TextField,
    PrimaryButton,
  },
})
export default class SaveTagView extends Vue {
  values: Omit<Tag, "id"> = {
    name: "",
    description: "",
    link: "",
  };

  async handleSubmit() {
    await createTag(this.values);
  }
}
</script>
