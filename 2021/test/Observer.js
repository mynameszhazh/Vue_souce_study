
class Observer {
  constructor(options) {
    this.$options = options
    if(this.$options) {
      this.walk(this.$options)
    }
  }
  walk(obj) {
    if(typeof obj !== 'object' || obj === null) {
      return
    }
    // console.log(typeof obj !== 'object')
    Object.keys(obj).forEach(key => {
      // console.log(key)
      defineReactive(obj, key, obj[key])
    })
  }
}

function defineReactive(obj,key,val) {
  observer(obj[key])
  Object.defineProperty(obj,key, {
    get() {
      console.log('get', val)
      return val
    },
    set(newVal) {
      console.log('set', val)
      observer(newVal)
      val = newVal
    }
  })
}
