import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { AMRequestConfig, AMRequestInterceptors } from './type'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
import { ElLoading, ElNotification } from 'element-plus'

//默认是否开启loading
const DEAFULT_LOADING = true

class AMRequest {
  instance: AxiosInstance
  interceptors?: AMRequestInterceptors
  showLoading?: boolean
  loading?: ILoadingInstance
  constructor(config: AMRequestConfig) {
    //创建实例
    this.instance = axios.create(config)
    // 基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    //使用配置的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有实例都有的拦截器,增加请求加载动画
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        ElNotification({
          title: '请求错误',
          message: '请检查网络是否异常!',
          type: 'error'
        })
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        ElNotification({
          title: '请求错误',
          message: err.message,
          type: 'error'
        })
        this.loading?.close()
        return err
      }
    )
  }

  /**
   * 调用axios进行请求
   * @param config 请求配置
   * @returns 异步Promise
   */
  request<T>(config: AMRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }

      //判断是否显示loading
      if (config.showLoading == false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          //将showLoading重置
          this.showLoading = DEAFULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          //将showLoading重置
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: AMRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: AMRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  put<T>(config: AMRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T>(config: AMRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default AMRequest
