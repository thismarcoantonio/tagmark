<template>
  <div>
    <page-title h="h2">Create new Card</page-title>
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
import { namespace } from "vuex-class";
import { ActionMethod } from "vuex";
import PageTitle from "@/components/PageTitle.vue";
import TextField from "@/components/TextField.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import { Card } from "@/declarations/Card";

const CardModule = namespace("card");

@Component({
  components: {
    PageTitle,
    TextField,
    PrimaryButton,
  },
})
export default class SaveCardView extends Vue {
  @CardModule.Action("setCard") actionSetCard!: ActionMethod;

  values: Omit<Card, "id"> = {
    name: "",
    description: "",
    link: "",
  };

  handleSubmit() {
    this.actionSetCard(this.values);
  }
}
</script>
