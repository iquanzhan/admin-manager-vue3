<template>
  <div class="login-panel">
    <el-card class="login-card">
      <h3 class="title">后台管理系统</h3>
      <div class="login-form">
        <el-form
          label-width="60px"
          :rules="rules"
          :model="account"
          ref="formRef"
        >
          <el-form-item label="账号" prop="userName">
            <el-input v-model="account.userName" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="account.password" />
          </el-form-item>
        </el-form>
        <div class="account-control">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        </div>

        <el-button type="primary" class="login-btn" @click="handleLoginClick"
          >立即登录</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  components: {},
  setup() {
    const store = useStore()

    const account = reactive({
      userName: localCache.getCache('userName'),
      password: localCache.getCache('password')
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const isKeepPassword = ref(true)
    const handleLoginClick = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword.value) {
            localCache.setCache('userName', account.userName)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('userName')
            localCache.deleteCache('password')
          }
          store.dispatch('login/login', { ...account })
        }
      })
    }

    return { account, formRef, rules, isKeepPassword, handleLoginClick }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 380px;
  margin-bottom: 150px;
  .login-card {
    border-radius: 10px;
    padding: 6px 2px;

    .title {
      text-align: center;
      color: #707070;
      margin: 0px;
      margin-bottom: 30px;
    }

    .account-control {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      padding: 0 10px;
    }
    .login-btn {
      width: 100%;
      margin-top: 15px;
    }
  }
}
</style>
