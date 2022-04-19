<template>
  <div class="home">
    <search-box />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SearchBox from "@/components/SearchBox.vue";

@Component({
  components: {
    SearchBox,
  },
})
export default class HomeView extends Vue {}
</script>
