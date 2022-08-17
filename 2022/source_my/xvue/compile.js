import { Watcher } from "./watcher.js"

export const Compiler = class {
  constructor(el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm
    this.compiler(this.$el)
  }
  compiler(el) {
    const childrenNodes = el.childNodes
    Array.from(childrenNodes).forEach(childrenNode => {
      if (this.isElement(childrenNode)) {
        this.compilerElement(childrenNode)
      } else if (this.isIner(childrenNode)) {
        this.compilerText(childrenNode)
      }

      // 递归处理其它的情况
      if (childrenNode.childNodes && childrenNode.childNodes.length) {
        this.compiler(childrenNode)
      }
    })
  }
  // 是否 元素
  isElement(node) {
    return node.nodeType === 1
  }
  // 是否 {{model}} 语法
  isIner(node) {
    return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  // 编译文本文件
  compilerText(node) {
    // node.textContent = this.$vm[RegExp.$1]
    this.update(node, RegExp.$1, 'text')
  }
  // 编译元素
  compilerElement(node) {
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      let attrName = attr.name
      let exp = attr.value
      if (this.isDirective(attrName)) {
        let dir = attrName.substring(2)
        // 这里可能 就是 text 和 html
        this[dir] && this[dir](node, exp)
      }
      if (this.isEvent(attrName)) {
        let dir = attrName.substring(1)
        this.eventHander(node, dir,exp)
      }
    })
  }

  update(node, exp, direction) {
    const fn = this[direction + 'updater']
    // 第一次执行
    fn && fn(node, this.$vm[exp])
    // 收集更新函数
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }

  isDirective(attrName) {
    return attrName.indexOf('x-') === 0
  }

  isEvent(attrName) {
    return attrName.indexOf('@') === 0
  }

  eventHander(node, event, method) {
    const fn = this.$vm.$options.methods && this.$vm.$options.methods[method]
    node.addEventListener(event, fn.bind(this.$vm))
  }
  // v-text
  text(node, exp) {
    // node.textContent = this.$vm[exp]
    this.update(node, exp, 'text')
  }
  // v-html
  html(node, exp) {
    // node.innerHTML = this.$vm[exp]
    this.update(node, exp, 'html')
  }
  // v-model
  model(node, exp) {
    // 更新视图
    this.update(node, exp, 'model')
    // 更新事件
    node.addEventListener('input', (e) => {
      // 将新的值给到 this.$vm 就好了
      this.$vm[exp] = e.target.value
    })
  }
  textupdater(node, val) {
    node.textContent = val
  }

  htmlupdater(node, val) {
    node.innerHTML = val
  }
  modelupdater(node, val) {
    // 这个是 input 的 value
    node.value = val
  }
}