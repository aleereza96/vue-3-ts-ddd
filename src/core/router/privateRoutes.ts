import type { RouteRecordRaw } from 'vue-router'
import { registerModules } from '@/shared/helper/register-modules'
import users from '@/modules/users'

const privateRoutes: RouteRecordRaw = {
  path: '/',
  component: () => import('../layouts/DefaultLayout.vue'),
  children: []
}

registerModules(
  {
    users
  },
  privateRoutes
)

export { privateRoutes }
