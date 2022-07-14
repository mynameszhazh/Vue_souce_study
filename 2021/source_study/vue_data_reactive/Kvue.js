// 关于一个这个方式我是 有点无语了。。
class Kvue {
  constructor (options) {
    this.$options = options
    this.$data = options.data

    if(this.$data) {
      new Observer(this.$data)
    }
    this.proxy(this, '$data')

    // 如果执行这里之后就会 让我的页面渲染我想要的数据了
    // 至于一个声明周期这种变态的东西这里 我是真的有点难以接受了。。。
    new Compiler(options.el, this)
  }
  // new Compiler('#app', this)
  proxy(vm, souceKey) {
    Object.keys(vm[souceKey]).forEach(key => {
      Object.defineProperty(vm, key, {
        get() {
          return vm[souceKey][key]
        },
        set(newVal) {
          vm[souceKey][key] = newVal
        }
      })
    })
  }
}
