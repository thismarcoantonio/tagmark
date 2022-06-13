<template>
  <search-box
    v-model="value"
    label="Search by title or a tag"
    @submit="handleSubmit"
  />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import SearchBox from "@/components/SearchBox.vue";

@Component({
  components: {
    SearchBox,
  },
})
export default class FilterSearch extends Vue {
  value = "";

  @State("search", { namespace: "filter" })
  search!: string;

  @Action("setSearch", { namespace: "filter" })
  setSearch!: (payload: string) => Promise<void>;

  handleSubmit() {
    this.setSearch(this.value);
  }
}
</script>
