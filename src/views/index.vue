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
          <!-- Main content -->
          <h1>君鼎房地产</h1>
          <vue-particles
            color="#7b7d7d"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="4"
            linesColor="#203c77"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="100"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
          ></vue-particles>
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
  components: { Sidebar, Topbar },
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  component: {}
}
</script>
<style scoped>
</style>
