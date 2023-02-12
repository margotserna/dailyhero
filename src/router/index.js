import { createRouter, createWebHistory } from 'vue-router'
import RoleSelection from '../views/RoleSelectionView.vue'
import Mission from '../views/MissionsView.vue'
import MissionForm from '../views/MissionFormView.vue'
import ProfileView from '../views/ProfileView.vue'
import MotivationView from '../views/MotivationView.vue'
const routes = [
  {
    path: '/',
    name: 'RoleSelectionView',
    component: RoleSelection
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/motivation',
    name: 'MotivationView',
    component: MotivationView
  },
  {
    path: '/map',
    name: 'MapView',
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
