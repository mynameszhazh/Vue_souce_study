import Vue from 'vue'
import Vuex from './Xvuex.js'

Vue.use(Vuex)

export default new Vuex({
  state: {
    counter: 1
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