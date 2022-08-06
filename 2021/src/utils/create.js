import Vue from 'vue'

function create (component, props) {
  const vm = new Vue({
    render: h => h(component, { props })
  }).$mount()
  // 这个$el 是在进行了一个render函数之后才会有的参数，就算是一个extend 这样的操作也是不会例外的
  // 或者说这个东西是需要我渲染之后，然后再进行了一个挂载之后，才能有的一个方法，这个是肯定不会有错的了
  // 渲染函数的是没有自己挂载这个意思的
  document.body.appendChild(vm.$el)
  // console.log(vm), 这样就可以拿到一个组件这样
  const comp = vm.$children[0]
  // console.log(comp)
  comp.remove = function () {
    // 这个删除的就是那个notice元素
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create
