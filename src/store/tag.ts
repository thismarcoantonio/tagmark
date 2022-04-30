import { Module } from "vuex";
import { Tag } from "@/declarations/Tag";
import { getTags, createTag } from "@/services/tag";

interface State {
  tags: Tag[];
}

interface RootState {
  root: boolean;
}

const Tag: Module<State, RootState> = {
  namespaced: true,
  state: {
    tags: getTags(),
  },
  actions: {
    async setTag(context, payload: Tag) {
      const tag = await createTag(payload);
      context.commit("SET_TAG", tag);
    },
  },
  mutations: {
    SET_TAG(state, payload) {
      state.tags = [...state.tags, payload];
    },
  },
};

export default Tag;
