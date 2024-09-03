import { type RouteRecordRaw } from 'vue-router'

const Module = () => import('./UserModule.vue')
const UsersList = () => import('./views/UsersList.vue')
const CreateUser = () => import('./views/CreateUser.vue')
const EditUser = () => import('./views/EditUser.vue')
const ViewUser = () => import('./views/ViewUser.vue')

const moduleRoute: RouteRecordRaw = {
  path: 'users',
  component: Module,
  children: [
    {
      path: '',
      component: UsersList
    },
    {
      path: 'create',
      component: CreateUser
    },
    {
      path: 'edit',
      component: EditUser
    },
    {
      path: 'view',
      component: ViewUser
    },

  ]
}

export default (router: RouteRecordRaw) => {
  router.children?.push(moduleRoute)
}
