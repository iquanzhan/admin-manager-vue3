/**
 * 用户登录表单对象
 */
export interface ILoginForm {
  userName: string
  password: string
}

/**
 * 登录后返回的结果信息
 */
export interface ILoginResult {
  token: string
  expireTime: number
}

/**
 * 当前登录的用户信息
 */
export interface ILoginUserInfo {
  id?: string
  userName?: string
  nickName?: string
  token?: string
  expireTime?: number
  loginTime?: number
  ip?: string
  roles?: Array<any>
  permissions?: Array<any>
}
