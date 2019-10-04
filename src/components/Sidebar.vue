<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode=" vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="min-height: 100vh;">
      <el-menu-item></el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">用户管理</el-menu-item>
      <el-menu-item index="3">预约订单管理</el-menu-item>
      <el-submenu index="4">
        <template slot="title">设置</template>
        <el-menu-item index="4-1">广告设置</el-menu-item>
        <el-menu-item index="4-2">支付设置</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">客服</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
</style>
