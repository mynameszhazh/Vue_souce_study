class Compiler {
  // el时我的dom挂载元素， vm时我的实例组件
  constructor (el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm
    if(this.$el) {
      this.compiler(this.$el)
    }
  }
  // 核心的一个编译函数
  compiler(el) {
    // console.log(el.childNodes)
    // 注意这里就是一个数组 array.from 可迭代东西就完事了
    const childNodes = el.childNodes
    childNodes.forEach(childNode => {
      if(this.isElement(childNode)) {
        this.compilerElement(childNode)
      } else if(this.isInter(childNode)) {
        // console.log('编译元素插值绑定', childNode)
        this.compilerText(childNode)
      }

      // 递归子节点，有些底层的东西就是喜欢搞一些 递归这样的操作，这是一个很重的东西
      // 有些判断就是很了不起的一个操作他不是吗？
      if(childNode.childNodes && childNode.childNodes.length > 0) {
        // 这里原生就显得很完美了，就是我的这个node节点的操作尽然是一个get 和 set的东西 不错哟
        this.compiler(childNode)
      }
    })
  }

  isElement (node) {
    return node.nodeType === 1
  }

  isInter (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compilerText(node) {
    this.updata(node, RegExp.$1, 'text')
  }

  // 实现一个以x-开头的插入方式，方法， 你想要一个什么样的功能就做什么样的代码
  compilerElement(node) {
    // 这个attrname 是一个为数组这样的东西了
    const attrNames = node.attributes
    Array.from(attrNames).forEach(attrname => {
      // console.log(attrname)
      const name = attrname.nodeName
      const value = attrname.nodeValue
      if(this.isDirection(name)) {
        const direction = name.substring(2)
        this[direction] && this[direction](node, value)
      } else if (this.isEvent(name)) {
        this.useEvent(node, value, name)
      }
    })
  }

  useEvent(node, value, dir) {
    const fn = this.$vm.$options.methods[value]
    // console.log(fn)
    const event = dir.substring(1)
    node.addEventListener(event, fn.bind(this.$vm))
  }

  isDirection(name) {
    return name.indexOf('x-') === 0
  }
  isEvent(name) {
    return name.indexOf('@') === 0
  }

  updata(node, exp, direction) {
    const fn = this[direction + 'updater']
    fn && fn(node, this.$vm[exp])
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }

  // x-text
  text(node, value) {
    // 这里就是做了一个赋值的操作很简单，但是确实非常有趣的一个东西，这里过来然后过去的感觉还是很不错的一个操作
    // node.textContent = this.$vm[value]
    this.updata(node, value, 'text')
  }
  // x-model
  model(node, value) {
    this.updata(node, value, 'model')
    node.addEventListener('input', (e) => {
      this.$vm[value] = e.target.value
    })
  }

  textupdater(node,value) {
    // console.log(value)
    node.textContent = value
  }
  modelupdater(node,value) {
    // 这里做的只有在我的input中的
    node.value = value
  }

  html(node, value) {
    // console.log( value)
    this.updata(node, value, 'html')
  }

  htmlupdater(node ,value) {
    // console.log(value)
    node.innerHTML = value
  }

}

// const wathcers = []
class Watcher {
  constructor(vm, key, updataFn) {
    this.vm = vm
    this.key=key
    this.updataFn = updataFn
    // wathcers.push(this)
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }
  updata() {
    // 这里要拿住的参数就是我vue实例里面的数据
    this.updataFn.call(this.vm, this.vm[this.key])

  }
}