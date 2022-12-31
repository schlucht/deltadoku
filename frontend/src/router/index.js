import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/data',
      name: 'data',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DataView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFoundPage',
      component: () => import('../views/404View.vue'),
    },
  ],
})

export default router
