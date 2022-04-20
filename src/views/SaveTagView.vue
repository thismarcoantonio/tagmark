<template>
  <div>
    <page-title h="h2">Create new tag</page-title>
    <form>
      <text-field name="title" label="Title" />
      <text-field name="description" label="Description" :multiple="true" />
      <text-field name="link" label="Main link" />
      <primary-button type="submit">Submit</primary-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue";
import TextField from "@/components/TextField.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

@Component({
  components: {
    PageTitle,
    TextField,
    PrimaryButton,
  },
})
export default class SaveTagView extends Vue {}
</script>
