<template>
  <div id="app">
    <main-header />
    <main class="px-4 mt-2">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainHeader from "./components/MainHeader.vue";

@Component({
  components: {
    MainHeader,
  },
})
export default class App extends Vue {}
</script>
