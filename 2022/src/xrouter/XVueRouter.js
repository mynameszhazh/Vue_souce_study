let Vue
class XVueRouter {
  constructor(options) {
    this.$options = options
  }
}

XVueRouter.install = function(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      // 注意了这里只有根实例才能进去
      if(this.$options.router) {}
    }
  })
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this.$options.router}
  })
}

export default XVueRouter