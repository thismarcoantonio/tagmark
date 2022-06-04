import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SaveBookmarkView from "@/views/SaveBookmarkView.vue";
import TagListView from "@/views/TagListView.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/new-bookmark",
    name: "save-bookmark",
    component: SaveBookmarkView,
  },
  {
    path: "/tags",
    name: "manage-tags",
    component: TagListView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
