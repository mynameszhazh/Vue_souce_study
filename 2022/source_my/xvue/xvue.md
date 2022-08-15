# xvue

## 基本结构
- Xvue: 主要构造函数
- observe: 执行数据响应式
- compile: 编译模板, 初始化视图, 收集依赖 (更新函数, watcher创建)
- watcher: 执行更新函数(更新dom)
- dep: 管理多个Watcher, 批量更新

## 基本方案
- 从中间开始往里面拓展

## 分布实现
- Kvue
  - 作为一个中枢来进行控制
- Observe
  - 响应式我的所有数据
- compile
  - 通过 原生的node 节点的 方式进行相应的操作,才是一个正确的打开方式
- proxy 
  - 超级简单的一层代理处理方式
- dep
  - 在 defineReactive 的时候 进行对每一个 响应数据 对应一个  dep
- watcher
  - 每一个 compile 的收集的 更新函数都在这里
-
## 总结
