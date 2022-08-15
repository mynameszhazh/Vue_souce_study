import { observer } from './observe.js'

export const defineReactive = function (obj, key, val) {
  if (typeof obj[key] == 'object') {
    observer(obj[key])
  }
  Object.defineProperty(obj, key, {
    get() {
      // console.log('get', key, val)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // console.log('set', key, val, newVal)
        if (newVal instanceof Object) {
          observer(newVal)
        }
        val = newVal
      }
    }
  })
}


export  const proxy  = function(vm, sourceKey) {
  Object.keys(vm[sourceKey]).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key]
      },
      set(newVal) {
        vm[sourceKey][key] = newVal
      }
    })
  })
}