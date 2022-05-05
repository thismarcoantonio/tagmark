<template>
  <div>
    <label
      :for="name"
      v-if="label"
      class="block mb-1 text-slate-900 text-sm font-medium"
    >
      {{ label }}
    </label>
    <input
      v-if="!multiple"
      :id="name"
      :name="name"
      :value="value"
      :class="sharedClasses"
      :placeholder="placeholder"
      @input="handleChange"
    />
    <textarea
      rows="4"
      v-if="multiple"
      :id="name"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :class="[sharedClasses, 'resize-none']"
      @input="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextField extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop({ required: true }) value!: string;
  @Prop() label!: string;
  @Prop() placeholder!: string;
  @Prop() multiple!: string;

  get sharedClasses() {
    return "block text-sm w-full py-2 px-3 border-2 border-gray-400 text-slate-800 rounded-lg shadow-sm focus:outline-none focus:border-rose-500 bg-white focus:border-lime-600";
  }

  handleChange($event: Event) {
    this.$emit("input", ($event.target as HTMLInputElement).value);
  }
}
</script>
