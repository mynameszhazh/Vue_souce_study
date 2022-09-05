function isObject(obj) {
  return typeof obj == "object" && obj != null
}

let toProxy = new WeakMap() // {obj: observed}
let toRow = new WeakMap() // {observed: obj}

function reactive(obj) {
  if (!isObject(obj)) return
  // 缓存操作
  if (toProxy.has(obj)) {
    return toProxy.get(obj)
  }
  if (toRow.has(obj)) {
    return obj
  }
  const observed = new Proxy(obj, {
    get(target, key, recver) {
      console.log('get', key)
      track(target, key)
      return isObject(target[key]) ? reactive(target[key]) : Reflect.get(target, key, recver)
    },
    set(target, key, value, recver) {
      console.log('set', key, value)
      tigger(target, key)
      return Reflect.set(target, key, value, recver)
    },
    deleteProperty(target, key) {
      console.log('delete', key )
      tigger(target, key)
      return Reflect.deleteProperty(target, key)
    }
  })
  toProxy.set(obj, observed)
  toRow.set(observed, obj)
  return observed
}

// 函数执行的载体
let effectStatck = []
function effect(fn) {
  let rxEffect = function () {
    try {
      // 需要的是哪个更加 健壮的 函数
      effectStatck.push(rxEffect)
      return fn()
    } catch (error) {
      console.log(error)
    } finally {
      effectStatck.pop()
    }
  }
  // 立即执行
  rxEffect()
  return rxEffect
}

// 依赖关系的一种 收集方式
let targetMap = new WeakMap()
function track(target, key) {
  let cb = effectStatck[effectStatck.length - 1]
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  deps.add(cb)
}

function tigger(target, key) {
  let deps = targetMap.get(target)?.get(key)
  deps?.forEach(cb => {
    cb()
  });
}

let state = reactive({
  obj: { a: '123' },
  foo: '我是一个foo'
})

effect(() => {
  console.log('effect1:', state.foo)
})

effect(() => {
  console.log('effect2:', state.foo)
})
// state.obj.a
state.foo = 'fooooooo'