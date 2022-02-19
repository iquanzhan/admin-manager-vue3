import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { globalRegister } from './global'

const app = createApp(App)

//添加全局注册类
app.use(globalRegister)

app.use(store)
app.use(router)
app.mount('#app')
