import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';
import {RootState} from '../type/index';
Vue.use(Vuex)

export default new Vuex.Store<RootState>({
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
  },
  modules: {
    user
  }
})
