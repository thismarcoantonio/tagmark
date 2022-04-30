import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SaveCardView from "@/views/SaveCardView.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/new-card",
    name: "save-card",
    component: SaveCardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
