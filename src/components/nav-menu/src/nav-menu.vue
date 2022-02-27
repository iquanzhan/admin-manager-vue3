<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" />
      <span class="title" v-if="!collapse">后台管理系统</span>
    </div>
    <el-menu
      default-active="2"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      class="el-menu-vertical"
      :collapse="collapse"
    >
      <el-menu-item index="2">
        <i class="el-icon-user" />
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document" />
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu" />
        <span>菜单管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background: #001529;

  .logo {
    display: flex;
    height: 27px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
