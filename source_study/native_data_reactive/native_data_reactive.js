// 记住了一个比较难的地方就是关于val的操作，有点生猛的操作 如果在外面的地方有我的这个val使用，他就会保存在一个闭包里面然后
// 他的这个值不是一个 这种感觉的东西，就是我设置了 一个东西的，他不是马上就去到一个我数据起源的地方进行一个设置
// 而是对于这个东西的使用就是一直保存在了这个函数中了，如果再次调用set得时候就有这个最后一次的val给你，如果这里不是这样就会出现一些问题了这个就是i一个闭包的好用出
function defineReactive (obj, key, val) {
  observer(val)
  // 这是一个解决对象问题的方式方法，如果要做到一个关于数组的变化，就要用到
  // 重新编写实例数组的原型对象这样的操作，好像还是很牛逼的
  Object.defineProperty(obj, key, {
    get () {
      console.log('get', val)
      return val
    },
    set (newVal) {
      console.log('set', newVal)
      observer(newVal)
      val = newVal
    }
  })
}

// 这个里面的一些操作真的不是一般人能解决问题一个存在
function set (obj, key, val) {
  defineReactive(obj, key, val)
}

function observer (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

const obj = { foo: 'foo', age: 18, baz: { a: 8 } }
observer(obj)
// obj.foo = 'fooooooooool'
// obj.baz = 'fooooooooool'
// obj.baz.a = 'fooooooooool'
set(obj, 'dong', {b: 9})
// obj.dong = '{b: 9}'
setInterval(() => {
  obj.age++
}, 1000);
