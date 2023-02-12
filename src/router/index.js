import { createRouter, createWebHistory } from 'vue-router'
import RoleSelection from '../views/RoleSelectionView.vue'
import Mission from '../views/MissionsView.vue'
import MissionForm from '../views/MissionFormView.vue'


const routes = [
  {
    path: '/',
    name: 'RoleSelectionView',
    component: RoleSelection
  },
  {
    path: '/superheroes',
    name: 'SuperHeroesView',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SuperHeroesView.vue')
    }
  },
  {
    path: '/map',
    name: 'MapView',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MapView.vue')
    }
  },
  {
    path: '/missions',
    name: 'Mission',
    component: Mission
  },
  {
    path: '/new-mission',
    name: 'NewMission',
    component: MissionForm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
