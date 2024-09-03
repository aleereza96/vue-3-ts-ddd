import { createRouter, createWebHistory } from 'vue-router'
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...publicRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../../views/NotFound.vue')
    },
    {
      path: '/server-error',
      name: 'ServerError',
      component: () => import('../../views/ServerError.vue')
    },
    {
      path: '/access-denied',
      name: 'AccessDenied',
      component: () => import('../../views/AccessDenied.vue')
    }
  ]
})

router.addRoute(privateRoutes)

export {router}