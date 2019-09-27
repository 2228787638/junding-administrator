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
        <el-submenu index="2">
          <template slot="title">用户列表</template>
          <el-menu-item index="2-1">新增用户</el-menu-item>
          <el-menu-item index="2-2">查看用户</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">房源列表</template>
          <el-menu-item index="3-1">新增房源</el-menu-item>
          <el-menu-item index="3-2">查看房源</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">收入</el-menu-item>
        <el-submenu index="5">
          <template slot="title">设置</template>
          <el-menu-item index="5-1">广告</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">客服</el-menu-item>
        <el-menu-item index="7" style='float: right;'>
          <el-button ><router-link to = '/login'>登录</router-link></el-button></el-menu-item>
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
