# 我 2022 看这个 vue2 的总结

## router

- [查看详情](./router.md)
  - 基础知识
  - 扩展
    - 子路由改变的监听
    - vue2 改变路由的方式
    - 路由的切换动画
    - 路由 key 绑定

## vue2 新特性

- [查看详情](./newvue2.md)
  - vue.observable
  - 动态组件
  - extend
  - v-cloak
  - vue 的键盘事件

## vue2 面试题

- [interview](./interview/interview.md)
- 源码系列
  - v-if & v-for 源码分析
  - vue 的 data 为什么只能是一个函数
  - vue 的 v-for 为什么需要绑定 key
  - diff 算法
  - 组件化
  - vue 设计理念
  - 为什么 vue 组件模板只有一个根元素
  - mvc mvp mvvm 的区别
  - 性能优化
  - 生命周期
  - $nextTick
  - 双向数据绑定
  - vue-router
  - 什么是递归组件

## vue3

- [vue3](./vue3/readme.md)
  - 新特性

## 源码系列

### 组件化

- [组件化](./source/components.md)
  - 基本知识
  - element 源码案列
    - 手写一个 form 这样
    - 小问题总结
  - Notice 组件的手写方式
    - render
    - extend

### vue2 全家桶

- [router](./source/router.md)
  - 基本知识
  - 任务点
  - 观看源码任务点
- [vuex](./source/vuex.md)

### vue mvvm

- [响应式](../source_my/reactive1.html)

### xvue

- 去看 那个 `anything` 这个文件就可以了

### 源码学习方法
- [study1](./source/study.md)
  - 基本知识
    - 环境的搭建
    

## webpack
- [webpack](./webpack.md)

## 权限管理
- 主要是参考 vue-element-admin 的项目进行操作
  - 本地的路由操作 => 需要进行一个动态的匹配 
  - 服务端的路由操作 => 肯定是没有任何问题的
  - 按钮的控制, 使用 v-if 或者 v-permission
- 涉及一个动态的 菜单配置
  - 有一种通过递归组件的操作
    - 这个东西的使用,还是只有在有树的时候才能这样进行使用

## 数据交互
-