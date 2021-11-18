function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

// 优化缓存使用
const toProxy = new WeakMap()
const toRaw = new WeakMap()

function reactive(obj) {
  if(!isObject(obj)) return obj

  // 判断是否传入一个已经代理过的对象
  if(toProxy.has(obj)) {
    return toProxy.get(obj)
  }
  // 判断是否传入一个observer这样
  if(toRaw.has(obj)) {
    return obj
  }

  const Obsever = new Proxy(obj, {
    get(target, key , receiver) {
      // 这个东西会把数组也当作是一个对象这样进行处理还是很牛逼的
      const res = Reflect.get(target,key, receiver)
      console.log('get', key, target[key])
      return isObject(res) ? reactive(res) : res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target,key, value, receiver)
      console.log('set', key, value)
      return res
    },
    deleteProperty(target, key) {
      const  res = Reflect.deleteProperty(target,key)
      console.log('delete', key)
      return res
    }
  })

  toProxy.set(obj, Obsever)
  toProxy.set(Obsever, obj)
  return Obsever
}

const state = reactive({
  foo: 'foo',
  bar: {a: 0},
  arr: [1,2,4,3]
})

// state.foo
// state.foo = 'foooooooo'
state.arr[0] = 'foooooooo'