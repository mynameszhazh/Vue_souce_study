import { Dep } from './dep.js'
import { observer } from './observe.js'
// import { watchers } from './watcher.js'

export const defineReactive = function (obj, key, val) {
  if (typeof obj[key] == 'object') {
    observer(obj[key])
  }
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get() {
      // console.log('get', key, val)
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // console.log('set', key, val, newVal)
        if (typeof newVal == 'object') {
          observer(newVal)
        }
        // watchers.forEach(watcher => {
        //   watcher.update()
        // })
        dep.notify()
        val = newVal
      }
    }
  })
}


export const proxy = function (vm, sourceKey) {
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