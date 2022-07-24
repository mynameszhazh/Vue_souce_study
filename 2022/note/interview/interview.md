# interview

##  v-if & v-for
- 在设计的时候就出现了问题
  - 其实就是vue的源码那里，他的 for 执行优先级高于 if 

## vue 的 data 为什么只能是一个函数
- 过不了编译，是因为他做了一层判断而已
- 在根判断的时候，会有一个 实例 的判断
- 中间有一个地方用来保存所有的全局变量 data， 就会出现重复

## vue 的 v-for 为什么需要绑定 key
- 当一个数组中改变了一个数据的时候 都会重头开始执行 `updateChilren`, 导致很多的浪费。  
- 当存在 `key` 的时候，就会跳过这样的过程
  - 但是需要注意的是 用 `index` 会出现 `渲染的bug` 

## diff 算法
- [diff](./diff.md)