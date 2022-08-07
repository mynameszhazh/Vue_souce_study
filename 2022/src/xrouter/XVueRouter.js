let Vue
class XVueRouter {
  constructor(options) {
    this.$options = options
    // 这个一定要是一个 响应式的数据,不然改变的时候,我的视图是不会发生变化的
    // this.currentPath = '/home'
    Vue.util.defineReactive(this, 'currentPath', '/')
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 创建一个 路由映射表
    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }
  onHashChange() {
    this.currentPath = window.location.hash.slice(1)
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

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      return h('a', { attrs: { href: '#' + this.to }, class: 'router-link' }, this.$slots.default)
    }
  })

  Vue.component('router-view', {
    render(h) {
      // 这是非常不合理的选择路由的方式
      const {routeMap, currentPath} = this.$router
      const component = routeMap[currentPath].component || null
      return h(component)
    }
  })
}

export default XVueRouter