# 源码实战代码

## reactive

- [最简单的响应式处理](./reactive1.html)
- [递归处理的响应式](./reactive2.html)
- [set](./reactive3.html)
- [array](./reactive4.html)
  - 处理一下 数组的响应式

- [测试虚拟dom的基本实现](./reactive5.html)
  - 主要是用到一个 `snabbdom` 的库
  - 这个里面的方法和 vue2 源码的东西都是一样的

## 手撕 vue

- [手撕 vue](./xvue/xvue.md)

## 浏览器 vue 的执行流程验证

- [编译流程验证](./flow.html)
- [响应式流程验证](./flow2.html)
  - 理出整体的思维导图
  - 自己尝试编写测试用例测试
  - 自己研究 Vue.set $watch delete
    - dep 和 wathch 是一个 n:n 的关系
      - 再更多的操作,我要说一些东西,就真的不知道怎么说明问题了
- [数据的更新 重新渲染](./flow3.html)
  - 主要是从 wather 这个构造函数出发,进行一个 深入的学习这样
    - this.run()
    - flushWatherQueuer 等等
      - 这样的东西,是比较好解决问题的

- [组件编译验证](./flow4.html)
  - parse

## vue3
- [doc](./vue3/reactive.md)
- 响应式原理
- 依赖收集的方式
  - [case1](./vue3/reactive.js)