import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSelect from "vue-select";
import "./index.css";

Vue.config.productionTip = false;

Vue.component("vue-select", VueSelect);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
