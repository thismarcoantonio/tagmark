<template>
  <header class="px-4 py-6 flex justify-between items-center relative">
    <h1 class="font-bold text-lg">
      <router-link to="/">
        <span class="text-lime-600">Tag</span>Mark
      </router-link>
    </h1>
    <button @click="handleMenuState(true)">
      <remix-icon icon="menu" class="text-lime-600 cursor-pointer" />
    </button>
    <main-menu :open="menuOpen" @close="handleMenuState(false)" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";
import MainMenu from "@/components/MainMenu.vue";

@Component({
  components: {
    RemixIcon,
    MainMenu,
  },
})
export default class MainHeader extends Vue {
  menuOpen = false;

  handleMenuState(value: boolean) {
    this.menuOpen = value;
  }
}
</script>
