import { App } from 'vue'
import { elementRegister } from './register-element'

export function globalRegister(app: App): void {
  app.use(elementRegister)
}
