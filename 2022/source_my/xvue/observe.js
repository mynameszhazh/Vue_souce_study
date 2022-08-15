import { defineReactive } from './utils.js'

export const observer = function (obj) {
  if (typeof obj !== 'object') {
    return
  }
  new Observer(obj)
}

export const Observer = class {
  constructor(obj) {
    // 如果是一个对象
    if (typeof obj == 'object') {
      this.walkObj(obj)
    }
  }
  walkObj(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}