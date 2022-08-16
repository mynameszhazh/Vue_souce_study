import { Dep } from "./dep.js"

// export const watchers = []
export const Watcher = class {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn

    // 每个 wathcer 实例都是独立存在的
    // watchers.push(this)
    Dep.target = this
    this.vm[this.key]
    Dep.target = null
  }
  update() {
    // 注意了这个
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}