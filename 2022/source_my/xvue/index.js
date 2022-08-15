import { Compiler } from './compile.js'
import {  observer } from './observe.js'
import { proxy } from './utils.js'

export const Xvue = class {
  constructor(options) {
    this.$options = options
    this.$data = options.data

    // 响应数据
    observer(this.$data)

    // 代理 $data
    proxy(this, '$data')

    // 编译 dom
    new Compiler(options.el, this)
  }
}