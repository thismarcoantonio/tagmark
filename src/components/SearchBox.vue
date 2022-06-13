<template>
  <form @submit.prevent="handleSubmit" class="relative flex items-center">
    <label
      :class="{ 'opacity-0 translate-x-1': search }"
      class="absolute pointer-events-none transition duration-200 text-gray-400 left-4 select-none"
    >
      {{ label }}
    </label>
    <input
      ref="search"
      type="search"
      name="search"
      v-model="search"
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
import { Vue, Component, Prop, VModel } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class FilterSearch extends Vue {
  @Prop()
  label!: string;

  @VModel()
  search!: string;

  handleSubmit() {
    this.$emit("submit");
  }
}
</script>
