# 双向绑定原理

## 面试题解析

### 基本知识
- vue双向绑定的思想为观察者思想
  - 响应式数据,称为 `观察者`
  - 绑定数据的地方,称为 `订阅者` 
- vue2源码位置
  - core/instance/core/initsate 

### observe
- 建立了一个 观察者的角度,来初始化所有数据(是不是就只是一个 watcher ) 来包括这样

### dep对象
  - 主要属性
    - id
      - 类似 `订阅者` ,的唯一标识 
    - subs
      - 观察者的列表
    - target
      - 全局唯一的一个订阅者对象
      - 因为 vue 每次都是一个个更新的吗?
  - 主要函数
    - addSub
      - 通过一个 push 添加一个 订阅者
    - removeSub
      - 通过 splice 删除一个 订阅者
    - depend
      - 将自己添加到当前订阅者对象的依赖列表 
    - notify
      - 数据更新时 , 遍历执行 subs 对象

### watcher
- 每个组件一个 watcher 进行操作 