<template>
  <search-box
    v-model="value"
    @submit="handleSubmit"
    :label="$t('filters.search')"
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
