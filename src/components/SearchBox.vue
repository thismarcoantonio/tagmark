<template>
  <form class="relative flex items-center">
    <label
      :class="{ 'opacity-0 translate-x-1': value }"
      class="absolute pointer-events-none transition duration-200 text-gray-400 left-2 select-none"
    >
      Search a word or a tag
    </label>
    <input
      type="search"
      name="search"
      v-model="value"
      autocomplete="off"
      class="p-2 w-full border border-slate-500 rounded-full outline-none"
    />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SearchBox extends Vue {
  value = "";
}
</script>
