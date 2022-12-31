
const dataRoutes = [
  {
    path: '/data/factory',
    name: 'data',
    component: () => import('../views/data/FactoryView.vue'),
  },
  {
    path: '/data/recipe',
    name: 'recipe',
    component: () => import('../views/data/RecipeView.vue'),
  },
  {
    path: '/data/unit',
    name: 'unit',
    component: () => import('../views/data/UnitView.vue'),
  },
  {
    path: '/data/admin',
    name: 'admin',
    component: () => import('../views/data/AdminView.vue'),
  },
]

export default dataRoutes