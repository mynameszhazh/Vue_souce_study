# 我2022 看这个 vue2 的总结

## router

- [查看详情](./router.md)
## vue2 新特性

### vue.observable

- 介绍
  - 这个就像是 vuex 一样的东西，只是这个东西会小一点

### 动态组件

- 很好的一个方式，参数传递的考虑方式，也是存在一些偏差的 

### extend

- 这就是一个关键的案列
```js
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{extendData}}</br>实例传入的数据为:{{propsExtend}}</p>',//template对应的标签最外层必须只有一个标签
  data: function () {
    return {
      extendData: '这是extend扩展的数据',
    }
  },
  props:['propsExtend']
})

// 创建的构造器可以挂载到元素上,也可以通过 components 或 Vue.component()注册使用
// 挂载到一个元素上。可以通过propsData传参.
new Profile({propsData:{propsExtend:'我是实例传入的数据'}}).$mount('#app-extend')

// 通过 components 或 Vue.component()注册
Vue.component('Profile',Profile)
```