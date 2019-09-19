<template>
  <div>
    <Header></Header>
    <div>{{msg}}</div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: '',
  components: {Header},
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  component: {
  }
}
</script>
<style scoped>

</style>
