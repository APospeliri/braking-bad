import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: () => import('../components/pages/Characters')
  },
  {
    path: '/character/:id',
    name: 'Character',
    props: true,
    component: () => import('../components/pages/Character')
  },
  {
    path: '/seasons',
    name: 'Seasons',
    component: () => import('../components/pages/Seasons')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
