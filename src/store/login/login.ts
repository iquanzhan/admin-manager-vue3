import { ILoginForm, ILoginUserInfo } from './../../service/login/type'
import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState } from './type'
import { loginRequest, getUserInfoRequest } from '@/service/login/login'
import router from '@/router'
import localCache from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {
        id: '',
        userName: '',
        nickName: '',
        token: '',
        expireTime: 0,
        loginTime: 0,
        ip: '',
        roles: [],
        permissions: []
      }
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: ILoginUserInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login({ commit }, payload: ILoginForm) {
      //进行登录
      const loginResult = await loginRequest(payload)
      const { token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      //获取用户信息
      const userInfoResult = await getUserInfoRequest()
      commit('changeUserInfo', userInfoResult.data)
      localCache.setCache('userInfo', userInfoResult.data)

      router.push('/')
    }
  }
}

export default loginModule
