<template>
  <div class="mb-4">
    <label
      :for="name"
      v-if="label"
      class="block mb-1 text-slate-900 text-sm font-medium"
    >
      {{ label }}
    </label>
    <input :id="name" :name="name" v-if="!multiple" :class="sharedClasses" />
    <textarea
      rows="4"
      v-if="multiple"
      :id="name"
      :name="name"
      :class="[sharedClasses, 'resize-none']"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextField extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop() label!: string;
  @Prop() multiple!: string;

  get sharedClasses() {
    return "block text-sm w-full py-2 px-3 border-2 border-gray-400 text-slate-800 rounded-lg shadow-sm focus:outline-none focus:border-rose-500 bg-white focus:border-lime-600";
  }
}
</script>
