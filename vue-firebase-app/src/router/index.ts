import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getCurrentUser } from '@/firebase'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ToDos',
    component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue'),
    meta: { protected: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: { protected: true }
  },
  {
    path: '/crud',
    name: 'Crud',
    component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue'),
    meta: { protected: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to, from, next) => {
  !to.meta.protected 
    ? next() 
    : await getCurrentUser() 
      ? next() 
      : next('/')
})

export default router
