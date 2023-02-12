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
    path: '/mapHero',
    name: 'MapViewHero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MapViewHero.vue')
    }
  },
  {
    path: '/mapCitizen',
    name: 'MapViewCitizen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MapViewCitizen.vue')
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
