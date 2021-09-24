class bus {
  constructor () {
    this.callbacks = {}
  }

  // 我事件总线的发布操作
  // 但是里面最重要的一个操作好像不见了，就是为什么只要触发$emit 就会触发$on 呢
  // 好像那个发布订阅者模式就是这个东西的化身不是吗？
  $emit (name, args) {
    // this.callbacks[name] = this.callbacks[name] || []
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => {
        cb(args)
      })
    }
  }

  // 监听我的发布操作
  $on (name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }

  $off (name) {
    for (const key in this.callbacks) {
      if (key === name) {
        delete this.callbacks[name]
      }
    }
  }
  // 想要一些一些其它的操作就是继续添加这样
}

/**
 * 这里有些真的很重要一些东西的触发就是一个好东西，是不是把我的callabcks这个属性，用作一个监听的操作了 ，这个是真的很有可能
 * 存在问题如果我的一个函数发生了变化，所有的函数全部都会调用一遍这样真的好吗？
 */

export default bus
