let Vue

class kVueRouter {
  constructor (options) {
    this.$options = options
    // 记住一个很重的事情我的这个this是一个router的实例的this 不是一个vue的this
    // 下面那些组件里面的操作就是一个vue的操作，有些东西是一定要明白的
    Vue.util.defineReactive(this, 'current', '/')
    // Vue.$set(this, 'current', '/')
    this.routerMap = {}
    options.routes.forEach(route => {
      // console.log(route)
      this.routerMap[route.path] = route
    })

    window.addEventListener('hashchange', this.onhashchange.bind(this))
    window.addEventListener('load', this.onhashchange.bind(this))
  }

  onhashchange () {
    // console.log(window.location.hash.slice(1))
    this.current = window.location.hash.slice(1)
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
      const { routerMap, current } = this.$router
      const component = routerMap[current].component || null
      // return h('router-view')
      return h(component)
    }
  })
}

export default kVueRouter
