import AMRequest from './request'
import localCache from '@/utils/cache'

const BASE_URL = 'http://localhost:9999'
const TIMEOUT = 15000

const amRequest = new AMRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authentication = token
      }
      return config
    }
  }
})

export default amRequest
