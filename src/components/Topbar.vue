<template>
    <div class="topbar">
        <el-menu
            mode="horizontal"
            class="el-menu-demo"
            background-color="#fff"
            text-color="#000"
            active-text-color="#ffd04b"
        >
            <el-submenu index="1" style="float: right;">
                <template slot="title">
                    <i class="el-icon-user-solid"></i>
                </template>
                <el-menu-item index="1-1">退出</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}

}

</script>

<style scoped>

</style>
