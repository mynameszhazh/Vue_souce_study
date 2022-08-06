# 组件

## 基本知识

### 组件化的优势

- 提高开发效率
- 组件复用
- 提高可维护性
- 便于多人开发
- 简化调试步骤
  - 我在 debugger 的时候会有更多的页面展示
  - 我在 console.log 的时候,会有更具体的位置信息

## element 源码案列

### 手写一个 form 这样

- xform
  - 接受所有的数据,统一进行分发处理
  - 所有的运算规则,处理
  - 统一的表单样式,选项等等
- xform-item
  - 对我每个 元素的一些东西,做一个统一的处理
    - 校验的选项, label 的展示方式
    - 校验错误的,弹出文字等等
  - 发送每个 prop 属性到 form 里面做一些 字段的收集,但时候统一处理
- xinput
  - 做我的数据处理
  - 然后通知,校验等等
    - 首先通知 from-item 进行数值改变监听校验

### 小问题

- validate-async 这个库可能存在一些版本的问题
- 事件派发的层级,可以通过更多的层级进行控制这样
  - 通过 emitter 这样的函数, dispatch 进行事件的派发(会到一个正确的位置进行对应的操作)

## Notice 组件的手写方式

### render 方式

- 通过一种平时实例化 #app 的手段 进行实例化我自定义的组件

```js
import Vue from "vue";
function create(component, props) {
  // 注意这里为止得到只是一个 虚拟dom $mount 之后有了真实的效果
  let vm = new Vue({
    render: (h) => h(component, { props }),
  }).$mount();
  // 想要加入 document 中 需要 vm.$el 一下
  document.body.appendChild(vm.$el);
  // 这里很明显,我的 component 组件就是这个 vm 的第一个,也是唯一一个
  const com = vm.$children[0];
  com.remove = function () {
    document.body.removeChild(vm.$el);
    vm.$destory();
  };
  return com;
}
```

### extend 方式

```js
// 这个方式 会比上一种 有更好的 阅读感觉
function create(component, props) {
  let Ctor = Vue.extend(component);
  let com = new Ctor({ propsData: props });
  com.$mount();
  document.body.appendChild(com.$el);
  com.remove = function () {
    document.body.removeChild(vm.$el);
    vm.$destory();
  };
  return com;
}
```
