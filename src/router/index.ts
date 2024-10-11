import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router'
import routes from './routes'
import NProgress, { NProgressStart, NProgressDone } from '@/utils/nprogress'
import setPageTitle from '@/utils/setPageTitle'

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
    noCache?: boolean
  }
}
const router = createRouter({
  // history: createWebHashHistory(import.meta.env.VITE_APP_BASE_PATH),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to: RouteLocationNormalized, from, next) => {
  NProgressStart()
  const toRoute = to as unknown as toRouteType
  setPageTitle(toRoute.meta.title) // 页面 title
  next()
})

router.afterEach(() => {
  NProgressDone()
})

export default router
