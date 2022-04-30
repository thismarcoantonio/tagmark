<template>
  <div>
    <page-title h="h2">Manage Tags</page-title>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageTitle from "@/components/PageTitle.vue";

@Component({
  components: {
    PageTitle,
  },
})
export default class TagListView extends Vue {}
</script>
