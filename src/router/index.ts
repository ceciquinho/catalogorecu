import { createRouter, createWebHistory } from '@ionic/vue-router'

import WelcomePage from '../views/WelcomePage.vue'
import MoviesPage from '../views/MoviesPage.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: WelcomePage
  },
  {
    path: '/movies',
    component: MoviesPage
  },
  {
    path: '/movie/:id',
    component: MovieDetailsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router