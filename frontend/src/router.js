// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SignInPage from './views/SignInPage.vue'
import SignUpPage from './views/SignUpPage.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/signin', component: SignInPage },
  { path: '/signup', component: SignUpPage },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
