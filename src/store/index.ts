import Vue from "vue";
import Vuex from "vuex";
import card from "./card";
import tag from "./tag";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    card,
    tag,
  },
});
