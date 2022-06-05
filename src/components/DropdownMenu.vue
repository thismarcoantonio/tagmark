<template>
  <div class="relative flex">
    <div
      v-if="open"
      @click="toggleDropdown"
      class="fixed w-full h-full top-0 left-0"
    />
    <slot name="action" :click="toggleDropdown" />
    <ul
      v-if="open"
      class="absolute bg-white w-56 rounded-md shadow-lg right-0 mt-8 border p-2"
    >
      <li
        :key="option.key"
        v-for="option in options"
        class="flex items-center rounded-md px-2 py-2 text-sm hover:bg-gray-200 hover:text-lime-600 cursor-pointer"
        @click="handleOptionClick(option.key)"
      >
        <remix-icon class="mr-2" v-if="option.icon" :icon="option.icon" />
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { DropdownOption } from "@/declarations/DropdownOption";
import RemixIcon from "@/components/RemixIcon.vue";

@Component({
  components: {
    RemixIcon,
  },
})
export default class DropdownMenu extends Vue {
  open = false;

  @Prop({ required: true }) options!: DropdownOption[];

  toggleDropdown() {
    this.open = !this.open;
  }

  handleOptionClick(key: string) {
    this.$emit("option-click", key);
    this.toggleDropdown();
  }
}
</script>
