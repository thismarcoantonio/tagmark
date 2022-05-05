<template>
  <li class="py-4 border-t">
    <div v-if="!edit" class="flex items-center">
      <span class="inline-block" v-if="!edit">{{ tag.name }}</span>
      <button @click="handleEdit" class="ml-auto">
        <remix-icon icon="edit" />
      </button>
    </div>
    <form v-if="edit" class="flex items-center" @submit.prevent="handleSubmit">
      <text-field name="nameField" :value="tag.name" readonly />
      <button type="submit" class="ml-auto">
        <remix-icon icon="save" />
      </button>
    </form>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ActionMethod } from "vuex";
import { Action } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import TextField from "@/components/TextField.vue";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    TextField,
    RemixIcon,
  },
})
export default class TagListItem extends Vue {
  edit = false;

  @Prop({ required: true })
  tag!: Tag;

  @Action("saveTag", { namespace: "tag" })
  saveTag!: ActionMethod;

  handleEdit() {
    this.edit = true;
  }

  async handleSubmit($event: Event) {
    const { value } = ($event?.target as HTMLFormElement).nameField;
    await this.saveTag({ ...this.tag, name: value });
    this.edit = false;
  }
}
</script>
