<template>
    <div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
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
        <el-menu-item index="5" style='float: right;'>
          <el-button >登录</el-button></el-menu-item>
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
