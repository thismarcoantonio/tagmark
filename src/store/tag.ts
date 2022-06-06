import { Module } from "vuex";
import { Tag } from "@/declarations/Tag";
import { RootState } from "@/declarations/RootState";
import { getTags, createTag, updateTag } from "@/services/tag";

export interface State {
  tags: Tag[];
}

const Tag: Module<State, RootState> = {
  namespaced: true,
  state: {
    tags: getTags(),
  },
  actions: {
    async saveTag({ commit, state }, payload) {
      if (payload.id) {
        const tags = await updateTag(payload);
        return commit("SET_TAGS", tags);
      }
      const tag = await createTag(payload);
      return commit("SET_TAGS", [...state.tags, tag]);
    },
  },
  mutations: {
    SET_TAGS(state, payload) {
      state.tags = payload;
    },
  },
};

export default Tag;
