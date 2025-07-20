import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SaveView from '@/views/SaveView.vue';
import ManageTagsView from '@/views/ManageTagsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: SaveView,
    },
    {
      path: '/tags',
      name: 'tags',
      component: ManageTagsView,
    },
  ],
});

export default router;
