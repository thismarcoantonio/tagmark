<template>
  <li class="py-4 border-t">
    <div v-if="!edit" class="flex items-center">
      <span class="inline-block" v-if="!edit">{{ tag.name }}</span>
      <button @click.once="handleDelete" class="ml-auto">
        <remix-icon v-if="!deleting" icon="delete" />
        <loader-icon v-if="deleting" />
      </button>
      <button @click="handleEdit" class="ml-4">
        <remix-icon icon="edit" />
      </button>
    </div>
    <form v-if="edit" class="flex items-center" @submit.prevent="handleSubmit">
      <text-field name="nameField" v-model="value" />
      <button type="submit" class="ml-auto">
        <remix-icon v-if="!loading" icon="save" />
        <loader-icon v-if="loading" />
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
import LoaderIcon from "@/components/LoaderIcon.vue";

@Component({
  components: {
    TextField,
    RemixIcon,
    LoaderIcon,
  },
})
export default class TagListItem extends Vue {
  edit = false;
  loading = false;
  deleting = false;
  value = "";

  @Prop({ required: true })
  tag!: Tag;

  @Action("saveTag", { namespace: "tag" })
  saveTag!: ActionMethod;

  @Action("deleteTag", { namespace: "tag" })
  deleteTag!: (payload: { id: string }) => Promise<void>;

  handleEdit() {
    this.edit = true;
  }

  async handleDelete() {
    this.deleting = true;
    await this.deleteTag({ id: this.tag.id });
    this.deleting = false;
  }

  async handleSubmit() {
    this.loading = true;
    await this.saveTag({ ...this.tag, name: this.value });
    this.loading = false;
    this.edit = false;
  }

  mounted() {
    this.value = this.tag.name;
  }
}
</script>
