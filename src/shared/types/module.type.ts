import type { RouteRecordRaw } from "vue-router"

export type Module = { router: (arg0: RouteRecordRaw) => void }
export type Modules = { [key: string]: Module }
