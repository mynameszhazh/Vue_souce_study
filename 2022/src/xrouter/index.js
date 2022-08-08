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
    childrens: [{
      path: '/home/banner',
      component: {render(h) {return h('div', 'nihao banner')}} 
    }],
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

export default router