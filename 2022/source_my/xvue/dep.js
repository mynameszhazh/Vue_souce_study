export const Dep = class {
  constructor() {
    this.deps = [] 
    this.target = null
  }
  addDep(watcher) {
    this.deps.push(watcher)
  }
  notify() {
    this.deps.forEach(watcher=> {
      watcher.update()
    });
  }
}