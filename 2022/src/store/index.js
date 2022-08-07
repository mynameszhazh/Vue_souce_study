import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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