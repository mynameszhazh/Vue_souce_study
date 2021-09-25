let Vue

class Kvuex {
  // private _vm
  constructor (options) {
    this.$options = options
    this._mutations = options.mutations
    this._actions = options.actions
    // 如果想要一个只读的属性利用vue的一些机制真的很方便，
    this._getter = options.getters
    this.getters = {}
    const computed = {}
    // 这样的一个写法我的一个vue实例在外面是看不到的
    const store = this
    Object.keys(this._getter).forEach(key => {
      const fn = store._getter[key]
      computed[key] = function () {
        return fn(store.state)
      }
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key]
      })
    })
    this._vm = new Vue({
      data: {
        $$state: options.state
      },
      computed
    })
    // this._getter = new Vue({
    //   computed: {
    //     $$state: options.getter
    //   }
    // })
    // 如果不是这样的一个操作是由问题的一个存在，你知道这是为什么吗？因为这个东西 就没有commit的了 到后面我的那个dispatch
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state () {
    return this._vm._data.$$state
  }

  set state (_val) {
    console.error('你造吗？ 你酱紫不好！！')
    // return this._vm._data.$$state
  }

  commit (type, payload) {
    const entry = this._mutations[type]
    // console.log(this._vm._data.$$state.counter)
    if (entry) {
      // 这个就是我的那个函数的声明一样的操作，经过了一层层的选择就是可以到达一定的地方
      entry(this.state, payload)
    }
  }

  dispatch (type, payload) {
    const entry = this._actions[type]
    if (entry) {
      // 这个就是我的那个函数的声明一样的操作，经过了一层层的选择就是可以到达一定的地方
      entry(this, payload)
    }
  }
}

Kvuex.install = (_Vue) => {
  Vue = _Vue
  // 这个操作我是没有想到的，有点牛逼的一个操作，全局引入的minin 这个操作会在每一个组件实例中调用这个里面的声明周期
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        // console.log(this.$options.router)
        // 这个东西就是挂载了我所有的规则这样了，不是很合理的一个选项
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default Kvuex
