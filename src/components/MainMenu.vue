<template>
  <div
    :class="{ 'opacity-0 pointer-events-none': !open }"
    class="absolute left-0 top-0 w-screen h-screen z-10 flex justify-end items-start"
  >
    <div
      @click="handleClose"
      class="bg-gray-800 w-full h-full absolute top-0 left-0 opacity-5"
    />
    <nav class="relative bg-white shadow-lg rounded-bl-md">
      <div class="pt-6 pr-4">
        <button @click="handleClose" class="block ml-auto">
          <remix-icon icon="close" class="text-lime-600" />
        </button>
      </div>
      <ul class="pt-2 px-6">
        <li
          :key="route.label"
          @click="handleClose"
          v-for="(route, index) of menuRoutes"
          :class="{ 'mb-2': index < menuRoutes.length - 1 }"
        >
          <router-link
            :exact="true"
            :to="route.to"
            active-class="text-lime-600 font-semibold"
          >
            {{ route.label }}
          </router-link>
        </li>
      </ul>
      <div class="pt-6 px-6 pb-6">
        <button
          class="font-semibold mr-3"
          @click="handleChangeTranslation('en')"
          :class="[activeLocale === 'en' ? 'text-lime-600' : 'text-gray-400']"
        >
          EN
        </button>
        <button
          class="font-semibold mr-3"
          @click="handleChangeTranslation('pt')"
          :class="[activeLocale === 'pt' ? 'text-lime-600' : 'text-gray-400']"
        >
          PT
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";
import i18n from "@/translation";

@Component({
  components: {
    RemixIcon,
  },
})
export default class MainMenu extends Vue {
  @Prop({ required: true }) open!: boolean;

  @Watch("open")
  onOpenChange() {
    document.body.classList.toggle("overflow-hidden");
  }

  handleClose() {
    this.$emit("close");
  }

  get activeLocale() {
    return i18n.locale;
  }

  get menuRoutes() {
    return [
      { to: "/", label: this.$t("menu.home") },
      { to: "/bookmark/create", label: this.$t("menu.newBookmark") },
      { to: "/tags", label: this.$t("menu.manageTags") },
    ];
  }

  handleChangeTranslation(locale: "en" | "pt") {
    if (locale !== i18n.locale) {
      i18n.locale = locale;
    }
  }
}
</script>
