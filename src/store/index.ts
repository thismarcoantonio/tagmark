import Vue from "vue";
import Vuex from "vuex";
import bookmark from "./bookmark";
import tag from "./tag";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bookmark,
    tag,
  },
});
