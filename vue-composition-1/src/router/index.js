import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "counter copy" */ '../components/CounterCopy.vue')
  },
  {
    path: '/countries',
    name: 'Countries',
    component: () => import(/* webpackChunkName: "counter copy" */ '../views/Countries.vue')
  },
  {
    path: '/countries/:name',
    name: 'Country',
    props: true,
    component: () => import(/* webpackChunkName: "counter copy" */ '../views/Country.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
