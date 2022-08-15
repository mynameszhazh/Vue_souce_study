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
    node.textContent = this.$vm[RegExp.$1] 
  }
  // 编译元素
  compilerElement(node) {
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach(attr => {
      let attrName = attr.name
      let exp = attr.value
      if(this.isDirective(attrName)) {
        let dir = attrName.substring(2)
        // 这里可能 就是 text 和 html
        this[dir] && this[dir](node, exp)
      }
    })
  }
  isDirective(attrName) {
    return attrName.indexOf('x-') === 0
  }
  text(node, exp) {
    node.textContent = this.$vm[exp]
  }
  html(node, exp) {
    node.innerHTML = this.$vm[exp]
  }
}