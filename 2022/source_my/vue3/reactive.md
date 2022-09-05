# reactive

## 数据响应式
- 通过 proxy + Relect
  - 进行代理的方式进行 处理
  - 可以处理 map 数组 对象, 什么都可以

## 计算属性的依赖收集方式
- effect函数
  - 将 依赖的 `响应式属性` 于 compute 的函数进行一个代理收集
- track
  - 在依赖收集的 getter 进行属性和对象的收集
- tigger
  - 在 setter 中进行 更改的依赖函数的触发