class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.$el = options.el
    observer(this.$data)
    this.proxy(this,'$data')
    this.compiler()
  }
 
  proxy(vm, data) {
    Object.keys(vm[data]).forEach(key => {
      Object.defineProperty(vm,key, {
        get() {
          return vm[data][key]
        },
        set(newVal) {
          vm[data][key] = newVal
        }
      })
    })
  }
  compiler() {
    new Compiler(this, this.$el)
  }
}
function observer(obj) {
  new Observer(obj)
}


