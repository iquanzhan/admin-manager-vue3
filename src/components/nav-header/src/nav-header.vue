<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFlod ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import UserInfo from './user-info.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { UserInfo },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFlod = ref(false)
    const handleFoldClick = () => {
      isFlod.value = !isFlod.value
      emit('foldChange', isFlod.value)
    }
    return { isFlod, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
