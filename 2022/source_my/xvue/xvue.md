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
- proxy 

## 总结
