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
          <el-form-item label="账号" prop="name">
            <el-input v-model="account.name" />
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

export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const isKeepPassword = ref(true)
    const handleLoginClick = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录')
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
