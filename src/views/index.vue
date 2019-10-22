<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside width="200px">
        <sidebar></sidebar>
        <!-- Aside content -->
      </el-aside>
      <el-container>
        <el-header width="100%" style="margin-left:-1px; padding:0;">
          <Topbar></Topbar>
        </el-header>
        <el-main height="">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar'
  import Topbar from '../components/Topbar'

  export default {
    name: '',
    components: {Sidebar, Topbar},
    data () {
      return {
      }
    },
    component: {}
  }
</script>
<style scoped>

</style>
