<template>
  <div>
    <label
      :for="name"
      v-if="label"
      class="block mb-1 text-slate-900 text-sm font-medium"
    >
      {{ label }}
    </label>
    <vue-select
      :id="name"
      :name="name"
      :value="value"
      :multiple="true"
      :options="options"
      class="select-field"
      @input="handleChange"
    >
      <template #open-indicator="{ attributes }">
        <remix-icon
          v-bind="attributes"
          icon="chevron-down"
          class="cursor-pointer"
        />
      </template>
    </vue-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RemixIcon from "@/components/RemixIcon.vue";
import "vue-select/dist/vue-select.css";

interface OptionValue {
  label: string;
  value: string;
}

@Component({
  components: {
    RemixIcon,
  },
})
export default class SelectField extends Vue {
  @Prop() label!: string;
  @Prop({ required: true }) name!: string;
  @Prop({ required: true }) value!: string;
  @Prop({ required: true }) options!: OptionValue[];

  handleChange(value: OptionValue[]) {
    this.$emit("input", value);
  }
}
</script>
