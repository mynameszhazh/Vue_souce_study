import { UserState, RootState } from '../type/index';
import {Module} from 'vuex';
const user: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    name: '老子叫减肥',
    token: 'a mock token'
  },
  mutations: {
    setUser(state, {name, token}) {
      state.name = name
      state.token = token
    }
  }
}

export default user