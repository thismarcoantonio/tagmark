<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-if="icon === IconTypes.menu">
      <path
        fill="currentColor"
        d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
      />
    </template>
    <template v-if="icon === IconTypes.star">
      <path
        v-if="!fill"
        fill="currentColor"
        d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"
      />
      <path
        v-if="fill"
        fill="currentColor"
        d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
      />
    </template>
    <template v-if="icon === IconTypes.close">
      <path
        fill="currentColor"
        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
      />
    </template>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconTypes } from "@/declarations/IconTypes";

@Component
export default class RemixIcon extends Vue {
  @Prop({ required: true }) icon!: IconTypes;
  @Prop() fill!: boolean;

  IconTypes = IconTypes;
}
</script>
