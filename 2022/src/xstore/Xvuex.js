let Vue
class Xvuex {
  constructor(options) {
    this.mutations = options.mutations
    this.actions = options.actions
    // this.state = new Vue({
    //   data() {
    //     return options.state
    //   }
    // })
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  get state() {
    return this._vm._data.$$state
  }

  set state(val) {
    console.log('滚蛋蛋就完事了 给我')
  }

  commit(methodName, payload) {
    let entry = this.mutations[methodName]
    entry(this.state, payload)
  }
  dispatch(methodName, payload) {
    let entry = this.actions[methodName]
    entry(this, payload)
  }
}
Xvuex.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        // 这里就相当于,拿了一个实例再用
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default Xvuex 