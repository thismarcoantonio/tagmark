import Vue from "vue";
import Vuex from "vuex";
import tag from "./tag";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tag,
  },
});
