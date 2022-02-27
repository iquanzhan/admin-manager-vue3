/**
 * 全局返回的公共方法
 */
export interface IDataResult<T = any> {
  code: string
  data: T
  msg: string
}
