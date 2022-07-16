# router

## 基础知识

-

## 扩展

- 子路由改变的监听
  - 通过 `watch` 监听 `$route` 的改变，然后去进行二次的操作的行为
  - 看主要示例
  ```js
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler() {
        // handle something
        console.log('router, change')
      }
    }
  },
  ```
