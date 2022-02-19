import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 自定义的请求拦截器
 */
export interface AMRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

/**
 * 自定义的请求配置类
 */
export interface AMRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AMRequestInterceptors<T>
  showLoading?: boolean
}
