<template>
  <div>
    <el-menu
      default-active="main"
      class="el-menu-demo"
      router
      mode=" vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="min-height: 100vh;">
      <el-menu-item></el-menu-item>
      <el-menu-item index="main">首页</el-menu-item>
      <el-menu-item index="user">用户管理</el-menu-item>
      <el-menu-item index="reservation">预约订单管理</el-menu-item>
      <el-submenu index="setting">
        <template slot="title">设置</template>
        <el-menu-item index="ad-setting">广告设置</el-menu-item>
        <el-menu-item index="pay-setting">支付设置</el-menu-item>
      </el-submenu>
      <el-menu-item index="customer-service">客服</el-menu-item>
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
