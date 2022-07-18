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
### v-cloak
- 这个的验证需要，一个网络请求的方式才可以
  - 还是会存在一些问题，就是这个只是一个 bloce而已， 肯定是没有其它的方式更好的 

### vue 的键盘事件

```js
// 对应键盘上的关键字
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right
```
- 所以不只是 一个 `entry` 可以使用这样的方式