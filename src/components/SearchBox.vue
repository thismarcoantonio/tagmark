<template>
  <form @submit.prevent="handleSubmit" class="relative flex items-center">
    <label
      :class="{ 'opacity-0 translate-x-1': value }"
      class="absolute pointer-events-none transition duration-200 text-gray-400 left-4 select-none"
    >
      Search by title or a tag
    </label>
    <input
      :value="value"
      @input="handleChange"
      ref="search"
      type="search"
      name="search"
      autocomplete="off"
      class="pl-4 p-2 w-full border border-slate-500 text-gray-800 rounded-full outline-none"
    />
    <button
      type="submit"
      class="absolute right-4 text-slate-500 hover:text-slate-800 transition-colors"
    >
      <remix-icon icon="search" />
    </button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class SearchBox extends Vue {
  value = "";

  @State("search", { namespace: "filter" })
  search!: string;

  @Action("setSearch", { namespace: "filter" })
  setSearch!: (payload: string) => Promise<void>;

  handleChange($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value;
    this.value = inputValue;
  }

  handleSubmit() {
    this.setSearch(this.value);
  }

  mounted() {
    const { search } = this.$route.query as { search: string };
    if (search) {
      this.value = search;
      this.setSearch(search);
    }
  }
}
</script>
