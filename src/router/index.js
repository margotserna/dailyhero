import { createRouter, createWebHistory } from 'vue-router'
import RoleSelection from '../views/RoleSelectionView.vue'
import SuperHero from '../views/SuperHeroesView.vue'
const routes = [
  {
    path: '/',
    name: 'RoleSelectionView',
    component: RoleSelection
  },
  {
    path: '/map',
    name: 'MapView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MapView.vue')
    }
  }, 
  {
    path: '/superheroes',
    name: 'SuperHeroes',
    component: SuperHero
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
