import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1cd39ab8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _114e0d69 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _202ca5e7 = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _50b8e812 = () => interopDefault(import('../pages/worker.vue' /* webpackChunkName: "pages/worker" */))
const _3be5ea49 = () => interopDefault(import('../pages/print/flow.vue' /* webpackChunkName: "pages/print/flow" */))
const _daa459cc = () => interopDefault(import('../pages/cards/_card.vue' /* webpackChunkName: "pages/cards/_card" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1cd39ab8,
    name: "about___ja"
  }, {
    path: "/en",
    component: _114e0d69,
    name: "index___en"
  }, {
    path: "/flow",
    component: _202ca5e7,
    name: "flow___ja"
  }, {
    path: "/worker",
    component: _50b8e812,
    name: "worker___ja"
  }, {
    path: "/en/about",
    component: _1cd39ab8,
    name: "about___en"
  }, {
    path: "/en/flow",
    component: _202ca5e7,
    name: "flow___en"
  }, {
    path: "/en/worker",
    component: _50b8e812,
    name: "worker___en"
  }, {
    path: "/print/flow",
    component: _3be5ea49,
    name: "print-flow___ja"
  }, {
    path: "/en/print/flow",
    component: _3be5ea49,
    name: "print-flow___en"
  }, {
    path: "/en/cards/:card?",
    component: _daa459cc,
    name: "cards-card___en"
  }, {
    path: "/cards/:card?",
    component: _daa459cc,
    name: "cards-card___ja"
  }, {
    path: "/",
    component: _114e0d69,
    name: "index___ja"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
