// 文件路径 - /store/store.js
import Vue from 'vue'

export const store = Vue.observable({ count: 0 })

export const mutations = {
  setCount (count) {
    console.log(count, 'observable count')
    store.count = count
  }
}