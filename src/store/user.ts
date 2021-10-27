import { UserState, RootState } from '../type/index';
import {Module} from 'vuex';
export const user: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    name: '',
    token: ''
  },
  mutations: {
    setUser(state, {name, token}) {
      state.name = name
      state.token = token
    }
  }
}