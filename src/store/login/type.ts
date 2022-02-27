import { ILoginUserInfo } from '@/service/login/type'

/**
 * store中的state对象
 */
export interface ILoginState {
  token: string
  userInfo: ILoginUserInfo
}
