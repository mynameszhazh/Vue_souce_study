import View from './components/View'
import Link from './components/Link'
let Vue
class XVueRouter {
  constructor(options) {
    this.$options = options
    // 这个一定要是一个 响应式的数据,不然改变的时候,我的视图是不会发生变化的
    // this.currentPath = '/home'
    // 第二种方式,对我的 currentPath 进行一个响应式监听
    // Vue.util.defineReactive(this, 'currentPath', '/')
    this.currentPath = '/'
    Vue.util.defineReactive(this, 'matched', [])
    this.match()

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 创建一个 路由映射表
    // this.routeMap = {}
    // options.routes.forEach(route => {
    //   this.routeMap[route.path] = route
    // })
  }
  onHashChange() {
    this.currentPath = window.location.hash.slice(1)
    this.matched = []
    this.match()
  }
  match(routes) {
    routes = routes || this.$options.routes
    for(let route of routes) {
      // 这里是一个非常垃圾的写法, 很多的边界条件都没有判断
      if(route.path == '/' && this.currentPath == '/'){
        this.matched.push(route)
      }

      // 如果不是 第一个路径, 就可以开放递归操作了
      if(route.path !== '/' && this.currentPath.indexOf(route.path) !== -1) {
        this.matched.push(route)
        if(route.childrens) {
          this.match(route.childrens)
        }
      }
    }
  }
}

XVueRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      // 注意了这里只有根实例才能进去
      if (this.$options.router) {
        // 这里进行一个 注册,是为了我后面的一些,操作变得更加的快速便捷
        // 注意这个 拿的不是  上面constructor 上面的 $options 而是全局注册的
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('router-link', Link)

  Vue.component('router-view', View)
}

export default XVueRouter