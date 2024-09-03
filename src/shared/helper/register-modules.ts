import { type RouteRecordRaw } from 'vue-router'
import type { Module, Modules } from '../types/module.type'

const registerModule = (module: Module, routesArray:RouteRecordRaw) => {
  if (module.router) {
    module.router(routesArray)
  }
}

export const registerModules = (modules: Modules,routesArray: RouteRecordRaw) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey]
    registerModule(module, routesArray)
  })
}

