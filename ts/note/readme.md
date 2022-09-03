# note(vue2)

## vue-router 
- 导入 {RouteConfig} 这样的路由的配置型
  - 这样写入我的 route 就有了配置的提示 
- 使用 this.$router
  - 需要进行一个全局的  声明, 来进行一个注入的操作
- 局部的钩子函数 
  - 需要引入一些 route 这样的函数进行更加关键的提示这样

## vuex
- vuex 这种操作, 主要是配置我的 state 就好了
  - RootState -> 自定义
  - 里面很多的东西都是可以 进行一个 类型推导
- 模块
  - Module 类型
  - 这里需要两种配置 类型
    - 当前模块的 state
    - 根 state
- 使用
  - `import {State, Action, namespace} from 'vuex-class'`
    - namespace 可以声明模块的一些使用 
      - `const userModule = namespace('user')`
    - 然后就是 userModule.State('name') 来进行修饰我的 定义的一些参数这样

## mixin
- 因为 vue2 的ts 方式是一种通过 class 的方式进行使用
  - 那么 mixin 也是通过 这种方式
  - 然后 我的 被混入的组件这里, 进行的操作就是 `extend mixins(Mymixin)`
    - 这个  mixins 里面会有很多的方式 进行一个传递 