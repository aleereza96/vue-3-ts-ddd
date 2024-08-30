import type { RouteRecordRaw } from 'vue-router'

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: []
  }
]
