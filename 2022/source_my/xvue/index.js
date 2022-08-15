import {  observer } from './observe.js'
import { proxy } from './utils.js'

export const Xvue = class {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    observer(this.$data)
    proxy(this, '$data')
  }
}