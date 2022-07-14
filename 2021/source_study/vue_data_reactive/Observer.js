class Observer {
  constructor (obj) {
    if(typeof obj === 'object') {
      this.objWalk(obj)
    }
    else if(typeof obj === 'array') {
      
    }
  }

  // 解决一个响应式的问题呢
  objWalk(obj) {
    // 传入入一个
    if (typeof obj !== 'object' || obj === null) {
      return
    }
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
  
  // 没有看到用处先  先放在这里先
  set (obj, key, val) {
    defineReactive(obj, key, val)
  }
}

function defineReactive (obj, key, val) {
  new Observer(val)
  // 这是一个解决对象问题的方式方法，如果要做到一个关于数组的变化，就要用到
  // 重新编写实例数组的原型对象这样的操作，好像还是很牛逼的
  // 这里嵌套肯定是会出现问题的
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get () {
      // console.log('get', val)
      // 每一个key都会有一个dep 有且只有一个 只有在创建watcher的时候才会addDep 这样
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set (newVal) {
      // console.log('set', newVal)
      new Observer(newVal)
      val = newVal
      dep.notify()
      // wathcers.forEach(w => {
      //   w.updata()
      // })
    }
  })
}

class Dep {
  constructor() {
    this.deps = []
  }

  addDep(value) {
    this.deps.push(value)
  }
  notify() {
    this.deps.forEach(item => 
      item.updata()
    )
  }
}