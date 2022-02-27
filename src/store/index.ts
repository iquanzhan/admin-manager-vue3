import { IRootState } from './type'
import { createStore } from 'vuex'
import login from './login/login'

export default createStore<IRootState>({
  state: {
    name: '后台管理系统'
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
