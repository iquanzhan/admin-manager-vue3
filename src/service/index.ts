import AMRequest from './request'

const BASE_URL = 'http://152.136.185.210:5000'
const TIMEOUT = 15000

const amRequest = new AMRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token && config.headers) {
        config.headers.Authorization = token
      }
      return config
    }
  }
})

export default amRequest
