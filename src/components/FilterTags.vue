<template>
  <div>
    <ul class="mt-8 mb-2 flex items-center justify-end">
      <li v-if="activeTags.length" class="text-sm text-gray-600">
        {{ $tc("filters.activeTags", activeTags.length) }}
      </li>
      <text-badge
        @click="handleModalToggle"
        class="mb-0 mr-0 ml-2 cursor-pointer"
      >
        <remix-icon icon="filter" :size="20" />
      </text-badge>
    </ul>
    <main-modal :open="modalOpen" @close="handleModalToggle">
      <template #title><span class="text-lime-600">Tag</span>Mark</template>
      <search-box
        class="mt-4 mb-8"
        v-model="searchValue"
        :label="$t('filters.searchTag')"
      />
      <div class="mb-4 flex justify-between items-center">
        <span class="text-gray-600">Tags ({{ totalTagsLabel }})</span>
        <button
          v-if="activeTags.length"
          class="text-lime-600 underline"
          @click="clearFilters"
        >
          {{ $t("filters.clearFilters") }}
        </button>
      </div>
      <ul>
        <text-badge
          v-for="tag in visibleTags"
          @click="handleTagFilter(tag)"
          :outlined="!isTagActive(tag)"
          :key="tag.id"
        >
          {{ tag.name }}
        </text-badge>
      </ul>
    </main-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Tag } from "@/declarations/Tag";
import TextBadge from "@/components/TextBadge.vue";
import RemixIcon from "@/components/RemixIcon.vue";
import MainModal from "@/components/MainModal.vue";
import SearchBox from "@/components/SearchBox.vue";

@Component({
  components: {
    TextBadge,
    RemixIcon,
    MainModal,
    SearchBox,
  },
})
export default class FilterTags extends Vue {
  modalOpen = false;
  searchValue = "";

  @State("tags", { namespace: "tag" })
  tags!: Tag[];

  @State("activeTags", { namespace: "filter" })
  activeTags!: string[];

  @Action("setActiveTag", { namespace: "filter" })
  setActiveTag!: (payload: string) => Promise<void>;

  @Action("removeActiveTag", { namespace: "filter" })
  removeActiveTag!: (payload: string) => Promise<void>;

  @Action("clearFilters", { namespace: "filter" })
  clearFilters!: () => Promise<void>;

  get visibleTags() {
    return this.tags.filter((tag) =>
      tag.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  get totalTagsLabel() {
    return this.searchValue
      ? this.$tc("filters.visibleOfTags", this.tags.length, {
          visibleCount: this.visibleTags.length,
        })
      : this.$tc("filters.tags", this.tags.length);
  }

  isTagActive(tag: Tag) {
    return this.activeTags.includes(tag.id);
  }

  handleModalToggle() {
    this.modalOpen = !this.modalOpen;
  }

  handleTagFilter(tag: Tag) {
    return !this.activeTags.includes(tag.id)
      ? this.setActiveTag(tag.id)
      : this.removeActiveTag(tag.id);
  }
}
</script>
