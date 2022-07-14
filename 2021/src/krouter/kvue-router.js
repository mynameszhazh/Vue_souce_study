let Vue

class kVueRouter {
  constructor (options) {
    this.$options = options
    // 记住一个很重的事情我的这个this是一个router的实例的this 不是一个vue的this
    // 下面那些组件里面的操作就是一个vue的操作，有些东西是一定要明白的
    // Vue.util.defineReactive(this, 'current', '/')
    this.current = window.location.hash.slice(1) || '/'
    Vue.util.defineReactive(this, 'matched', [])
    // Vue.$set(this, 'current', '/')
    // this.routerMap = {}
    // options.routes.forEach(route => {
    //   this.routerMap[route.path] = route
    // })
    this.match()
    window.addEventListener('hashchange', this.onhashchange.bind(this))
    window.addEventListener('load', this.onhashchange.bind(this))
  }

  onhashchange () {
    // console.log(window.location.hash.slice(1))
    this.current = window.location.hash.slice(1)
    // 这里我就明白一些东西多一点了，只会存在这种多级，那要是树呢?
    this.matched = []
    this.match()
  }

  // 匹配当前地址对应路由规则 =》 解决路由嵌套问题，但是没有动态路由的解决方案
  match (routes) {
    // 这里就要注意了，我是肯定拿不到那个this.$router的绝对
    routes = routes || this.$options.routes
    // 这里会得到的是要给routes的路由规则表
    for (const route of routes) {
      if (route.path === '/' && this.current === '/') {
        this.matched.push(route)
        return
      }
      if (route.path !== '/' && this.current.indexOf(route.path) !== -1) {
        this.matched.push(route)
        if (route.children) {
          this.match(route.children)
        }
        return
      }
    }
  }
}

kVueRouter.install = (_Vue) => {
  Vue = _Vue
  // 这个操作我是没有想到的，有点牛逼的一个操作，全局引入的minin 这个操作会在每一个组件实例中调用这个里面的声明周期
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        // console.log(this.$options.router)
        // 这个东西就是挂载了我所有的规则这样了，不是很合理的一个选项
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  // 这里出现了一个东西就是模板语法是不能在一个运行时环境中使用的，因为没有模板编译器这种东西给你用，所有就需要用到一个render函数来解决一些问题
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render (h) {
      return h('a', { attrs: { href: '#' + this.to }, class: 'router-link' }, this.$slots.default)
    }
  })
  // router-view
  Vue.component('router-view', {
    render (h) {
      // 标记这个组件时一个router-view组件，而且是一个响应式的方式来解决一些问题的
      this.$vnode.data.routerview = true
      // 这个是一个深度的判断，在后面应该使用的到，很不错的一个选项
      let depth = 0
      // 但钱组件的父组件这样，确定当前这个router-view 的层级使用，也是一个很不错的选择
      let parent = this.$parent
      while (parent) {
        const currentVnode = parent.$vnode && parent.$vnode.data
        if (currentVnode) {
          if (currentVnode.routerview) {
            depth++
            // console.log(depth)
          }
        }
        parent = parent.$parent
      }
      // const { routerMap, current } = this.$router
      // const component = routerMap[current].component || null
      let component = null
      const route = this.$router.matched[depth]
      // console.log(this.$router.matched[1])
      if (route) {
        component = route.component
      }
      return h(component)
    }
  })
}

export default kVueRouter
