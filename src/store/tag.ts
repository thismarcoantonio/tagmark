import { Module } from "vuex";
import { Tag } from "@/declarations/Tag";
import { RootState } from "@/declarations/RootState";
import { getTags, createTag, updateTag, deleteTag } from "@/services/tag";

export interface State {
  tags: Tag[];
}

const Tag: Module<State, RootState> = {
  namespaced: true,
  state: {
    tags: getTags(),
  },
  actions: {
    async saveTag({ commit }, payload) {
      const tags = await (payload.id ? updateTag(payload) : createTag(payload));
      return commit("SET_TAGS", tags);
    },
    async deleteTag({ commit, dispatch }, payload: { id: string }) {
      const tags = await deleteTag(payload);
      commit("DELETE_TAG", tags);
      dispatch("bookmark/deleteBookmarksTag", payload, { root: true });
    },
  },
  mutations: {
    SET_TAGS(state, payload) {
      state.tags = payload;
    },
    DELETE_TAG(state, payload) {
      state.tags = payload;
    },
  },
};

export default Tag;
