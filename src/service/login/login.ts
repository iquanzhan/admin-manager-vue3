import amRequest from '../index'

import { ILoginForm, ILoginResult, ILoginUserInfo } from './type'
import { IDataResult } from '../type'

enum LoginApi {
  //用户登录地址
  LoginUrl = '/auth/user/login',
  //获取当前登录用户信息地址
  GetUserInfoUrl = '/auth/user/info'
}

/**
 * 进行登录
 * @param loginForm 登录表单
 * @returns 登录结果
 */
export function loginRequest(loginForm: ILoginForm) {
  return amRequest.post<IDataResult<ILoginResult>>({
    url: LoginApi.LoginUrl,
    data: loginForm
  })
}
/**
 * 获取当前登录用户信息
 * @returns 登录的用户信息
 */
export function getUserInfoRequest() {
  return amRequest.get<IDataResult<ILoginUserInfo>>({
    url: LoginApi.GetUserInfoUrl
  })
}
