class Compiler {
  constructor(vm, el) {
    this.$vm = vm
    this.dom = document.querySelector(el)
    this.$el = el
    // console.log(el)
    this.compiler(this.dom)
  }
  compiler(dom) {
    let  childNodes = dom.childNodes
    // console.log(node)
    childNodes.forEach(childNode => {
      console.log(childNode)
    })
  }
}