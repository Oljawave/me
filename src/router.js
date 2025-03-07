import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/gallery', component: () => import('./pages/Gallery.vue') },
    { path: '/malaysia', component: () => import('./pages/Malaysia.vue') },
  ],
});

export default router;
