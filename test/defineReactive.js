function defineReactive(obj,key,val) {
  observer(obj[key])
  Object.defineProperty(obj,key, {
    get() {
      console.log('get', val)
      return val
    },
    set(newVal) {
      // 这里的val如果没有丢失引用就会一直在
      console.log('set', val)
      val = newVal
    }
  })
}

function observer(obj) {
  // console.log(obj)
  if(typeof obj !== 'object' || obj === null) {
    return
  }
  // console.log(typeof obj !== 'object')
  Object.keys(obj).forEach(key => {
    // console.log(key)
    defineReactive(obj, key, obj[key])
  })
}

// const obj = {foo: 'fooooo', bar: '115151', task: {task1: 'one', task2: 'two'}}
// observer(obj)
// obj.foo = 'nihao'

