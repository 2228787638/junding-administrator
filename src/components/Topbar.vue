<template>
  <div class="topbar">
    <el-menu
      mode="horizontal"
      class="el-menu-demo"
      text-color="#000"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1" style="float: right;">
        <template slot="title">
          {{username}}<i class="el-icon-user-solid"></i>
        </template>
        <el-menu-item index="1-1" v-on:click="clickLoginOut">
          退出登录
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState('common', ['username'])
    },
    watch: {},
    methods: {
      ...mapActions('common', ['getCurrentUser']),
      ...mapMutations('common', ['loginOut']),
      clickLoginOut () {
        this.loginOut()
        this.$router.push('/login')
      }
    },
    mounted: function () {
      this.getCurrentUser()
    }
  }

</script>

<style scoped>
  .router-link-active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
</style>
