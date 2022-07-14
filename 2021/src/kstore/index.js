import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

// export default new Vuex.Store({
const vuex = new Vuex({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter (state) {
      return state.counter * 2
    }
  },
  mutations: {
    add (state, payload) {
      state.counter += payload
    }
  },
  actions: {
    add ({ commit }, payload) {
      setTimeout(() => {
        commit('add', payload)
      }, 1000)
    }
  }
})

// console.log(vuex._vm._data.$$state.counter = 2)

export default vuex
