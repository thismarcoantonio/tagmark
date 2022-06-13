import { Module } from "vuex";
import { RootState } from "@/declarations/RootState";

export interface State {
  search: string;
  activeTags: string[];
}

const Filter: Module<State, RootState> = {
  namespaced: true,
  state: {
    search: "",
    activeTags: [],
  },
  actions: {
    setSearch(context, payload: string) {
      context.commit("SET_SEARCH", payload);
    },
    setActiveTag(context, payload: string) {
      context.commit("SET_ACTIVE_TAG", payload);
    },
    removeActiveTag(context, payload: string) {
      context.commit("REMOVE_ACTIVE_TAG", payload);
    },
    clearFilters(context) {
      context.commit("CLEAR_FILTERS");
    },
  },
  mutations: {
    SET_SEARCH(state, payload) {
      state.search = payload;
    },
    SET_ACTIVE_TAG(state, payload) {
      state.activeTags = [...state.activeTags, payload];
    },
    REMOVE_ACTIVE_TAG(state, payload) {
      state.activeTags = state.activeTags.filter(
        (activeTag) => activeTag !== payload
      );
    },
    CLEAR_FILTERS(state) {
      state.activeTags = [];
    },
  },
};

export default Filter;
