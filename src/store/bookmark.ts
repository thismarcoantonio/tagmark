import { Module } from "vuex";
import { Bookmark } from "@/declarations/Bookmark";
import { RootState } from "@/declarations/RootState";
import { filterByName, filterByTags } from "@/utils/bookmarkFilter";
import {
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark,
  deleteBookmarkTag,
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
      return state.bookmarks.filter(
        (bookmark) =>
          filterByName(bookmark, filter.search) &&
          filterByTags(bookmark, filter.activeTags)
      );
    },
  },
  actions: {
    async setBookmark(context, payload: Omit<Bookmark, "id">) {
      const bookmarks = await createBookmark(payload);
      context.commit("SET_BOOKMARKS", bookmarks);
    },
    async updateBookmark(context, payload: Bookmark) {
      const bookmarks = await updateBookmark(payload);
      context.commit("SET_BOOKMARKS", bookmarks);
    },
    async setFavorite(context, payload: { id: string; favorite: boolean }) {
      const bookmarks = await updateBookmark(payload);
      context.commit("SET_BOOKMARKS", bookmarks);
    },
    async deleteBookmark(context, payload: { id: string }) {
      const bookmarks = await deleteBookmark(payload);
      context.commit("DELETE_BOOKMARK", bookmarks);
    },
    async deleteBookmarksTag(context, payload: { id: string }) {
      const bookmarks = await deleteBookmarkTag(payload);
      context.commit("SET_BOOKMARKS", bookmarks);
    },
  },
  mutations: {
    SET_BOOKMARKS(state, payload) {
      state.bookmarks = payload;
    },
    DELETE_BOOKMARK(state, payload) {
      state.bookmarks = payload;
    },
  },
};

export default Bookmark;
