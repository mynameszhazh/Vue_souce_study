import Vue from 'vue'
import VueRouter from './XVueRouter.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      auth: false 
    },
    childrens: [],
    beforeEntry(to, from, next) {
      if (window.isLogin) {
        next()
      }
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    meta: {
      auth: false 
    },
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

// 需要进行一个权限验证
// router.beforeEach((to, from, next) => {
//   // 需要通过一个权限验证
//   if (to.meta.auth) {
//     if (window.isLogin) {
//       next()
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   } else {
//     next()
//   }
// })
export default router