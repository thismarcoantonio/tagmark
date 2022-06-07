import { Module } from "vuex";
import { RootState } from "@/declarations/RootState";
import router from "@/router";

export interface State {
  search: string;
}

const Filter: Module<State, RootState> = {
  namespaced: true,
  state: {
    search: "",
  },
  actions: {
    setSearch(context, payload: string) {
      context.commit("SET_SEARCH", payload);

      if (router.app?.$route?.query?.search !== payload) {
        router.push({
          path: "/",
          ...(payload && { query: { search: payload } }),
        });
      }
    },
  },
  mutations: {
    SET_SEARCH(state, payload) {
      state.search = payload;
    },
  },
};

export default Filter;
