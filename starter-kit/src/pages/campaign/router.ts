import { createRouter, createWebHistory } from 'vue-router'
import ListName from '@/components/campaign/name/ListName.vue'

const routes = [
  { path: '/campaign/listname', component: ListName },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default router
