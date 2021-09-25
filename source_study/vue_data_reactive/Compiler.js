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
    const childrenNode = el.childrenNode || el
  }
}
