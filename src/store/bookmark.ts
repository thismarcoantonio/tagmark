import { Module } from "vuex";
import { Bookmark } from "@/declarations/Bookmark";
import {
  getBookmarks,
  createBookmark,
  updateBookmark,
} from "@/services/bookmark";

interface State {
  bookmarks: Bookmark[];
}

interface RootState {
  root: boolean;
}

const Bookmark: Module<State, RootState> = {
  namespaced: true,
  state: {
    bookmarks: getBookmarks(),
  },
  actions: {
    async setBookmark(context, payload: Bookmark) {
      const bookmark = await createBookmark(payload);
      context.commit("SET_BOOKMARK", bookmark);
    },
    async setFavorite(context, payload: { id: string; favorite: boolean }) {
      const bookmarks = await updateBookmark(payload);
      context.commit("SET_BOOKMARKS", bookmarks);
    },
  },
  mutations: {
    SET_BOOKMARK(state, payload) {
      state.bookmarks = [...state.bookmarks, payload];
    },
    SET_BOOKMARKS(state, payload) {
      state.bookmarks = payload;
    },
  },
};

export default Bookmark;
