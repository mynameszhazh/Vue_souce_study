import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      auto: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '/about/detail/:id',
        name: 'aboutDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  if (to.meta.auto) {
    console.log('home')
    if (!(window.sessionStorage.getItem('islogin') !== 'false')) {
      next('/login?redirect=' + to.fullPath)
    } else {
      console.log('111')
      next()
    }
  } else {
    next()
  }
})

// ????????????addRouter ?????????????????????????????????????????????????????????????????????????????????
// ???????????????????????????????????????????????????????????? ???
// router.beforeEach((to, form, next) => {
//   // console.log(window.sessionStorage.getItem('islogin'))
//   if (window.sessionStorage.getItem('islogin')) {
//     // ?????????????????????
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     // ?????????????????????
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   }
// })
export default router
