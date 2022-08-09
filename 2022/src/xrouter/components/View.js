export default {
  render(h) {
    // 可以通过 $vonode 拿到组件的 data,然后对里面的一些状态进行 更好地判断
    this.$vnode.data.routerView = true
    let depth = 0
    let parent = this.$parent
    // 通过一层一层的晚上找, 找到你当前所在的层级就完事了
    while (parent) {
      let vnodeData = parent.$vnode && parent.$vnode.data
      if (vnodeData) {
        if (vnodeData.routerView) {
          depth++
        }
      }
      parent = parent.$parent
    }
    // 这是非常不合理的选择路由的方式, 没有做到 层级的判断
    // const { routeMap, currentPath } = this.$router
    // const component = routeMap[currentPath].component || null
    let component = null
    let route = this.$router.matched[depth]
    console.log(route)
    if (route) {
      component = route.component
    }
    return h(component)
  }
}