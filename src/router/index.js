import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Boats from '../views/Boats.vue'
import store from '../store/index.js'
import Users from '../views/Users.vue'
import Shipments from '../views/Shipments.vue'
import Depots from '../views/Depots.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/boats',
    name: 'Boats',
    component: Boats,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/shipments',
    name: 'Shipments',
    component: Shipments,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/depots',
    name: 'Depots',
    component: Depots,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isAuthenticated) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
