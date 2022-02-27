import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElCard,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
  ElDropdown,
  ElDropdownItem
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElCard,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon,
  ElDropdown,
  ElDropdownItem
]

export function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
