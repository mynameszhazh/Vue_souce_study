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
    - notify
      - 数据更新时 , 遍历执行 subs 对象

### watcher
- 每个组件一个 watcher 进行操作 


### 预习课总结
- observer
  - 通过 difinePoroptoty 对我的数据进行监听
  - 每一个响应式数据 加入一个 dep
- dep
  - 每个 dep 保存好她的数据, 加入到 watcher 中
  - 数据发生改变的时候, dep.notify 通知对应 wathcher 执行 相应的组件更新
- watcher
  - 拿到 dep 数据
  - 监听dom元素
- data
  - 各种各样的数据,无论是递归,还是遍历处理,都是可以解决的
- component render
  - 前面通过依赖收集, 生成的更新函数,通过 `wathcher` 的 `update` 函数来执行对应的更新函数 
- virual dom
  - 更新函数执行,更新视图