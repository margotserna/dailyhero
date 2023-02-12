import { createRouter, createWebHistory } from 'vue-router'
import RoleSelection from '../views/RoleSelectionView.vue'
import Mission from '../views/MissionsView.vue'

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
    name: 'SuperHeroesView',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SuperHeroesView.vue')
    }
  },
  {
    path: '/missions',
    name: 'Mission',
    component: Mission
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
