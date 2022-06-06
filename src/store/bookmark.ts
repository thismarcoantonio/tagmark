import { Module } from "vuex";
import { Bookmark } from "@/declarations/Bookmark";
import { RootState } from "@/declarations/RootState";
import {
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from "@/services/bookmark";

export interface State {
  bookmarks: Bookmark[];
}

const Bookmark: Module<State, RootState> = {
  namespaced: true,
  state: {
    bookmarks: getBookmarks(),
  },
  getters: {
    bookmarkList(state, getters, { filter }) {
      return state.bookmarks.filter(({ name, description }) => {
        const searchTerm = filter.search.toLowerCase();
        return (
          name.toLowerCase().includes(searchTerm) ||
          description.toLowerCase().includes(searchTerm)
        );
      });
    },
  },
  actions: {
    async setBookmark(context, payload: Omit<Bookmark, "id">) {
      const bookmark = await createBookmark(payload);
      context.commit("SET_BOOKMARK", bookmark);
    },
    async updateBookmark(context, payload: Bookmark) {
      const bookmark = await updateBookmark(payload);
      context.commit("SET_BOOKMARKS", bookmark);
    },
    async setFavorite(context, payload: { id: string; favorite: boolean }) {
      const bookmarks = await updateBookmark(payload);
      context.commit("SET_BOOKMARKS", bookmarks);
    },
    async deleteBookmark(context, payload: { id: string }) {
      const bookmarks = await deleteBookmark(payload);
      context.commit("DELETE_BOOKMARK", bookmarks);
    },
  },
  mutations: {
    SET_BOOKMARK(state, payload) {
      state.bookmarks = [...state.bookmarks, payload];
    },
    SET_BOOKMARKS(state, payload) {
      state.bookmarks = payload;
    },
    DELETE_BOOKMARK(state, payload) {
      state.bookmarks = payload;
    },
  },
};

export default Bookmark;
