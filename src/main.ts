import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { globalRegister } from './global'

import amRequest from './service'

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
amRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: true
  })
  .then((res) => {
    console.log(res)
  })

const app = createApp(App)

//添加全局注册类
app.use(globalRegister)

app.use(store)
app.use(router)
app.mount('#app')
