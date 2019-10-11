<template>
  <div>
    <p>当前用户总数：<el-tag>{{totalElements}}</el-tag></p>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="用户名"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.user.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="昵称"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.nickname }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="头像"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px"><img :src="scope.row.avatar"/></span>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.sex}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="地址"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>
      <el-pagination
        class="centerClass"
        background
        layout="prev, pager, next"
        :page-count="totalPages"
        @current-change="current_change">
      </el-pagination>
    </p>
  </div>
</template>

<script>
  import {deleteUserInfo, listUserInfos} from '../api/getData'

  export default {
    data () {
      return {
        tableData: [],
        totalPages: 0,
        pagesize: 10,
        currentPage: 1,
        totalElements: 0
      }
    },
    methods: {
      async getUserInfos () {
        let userInfos = await listUserInfos(this.currentPage - 1, this.pagesize)
        this.tableData = userInfos.data.content
        this.totalPages = userInfos.data.totalPages
        this.totalElements = userInfos.data.totalElements
      },
      current_change (currentPage) {
        this.currentPage = currentPage
        this.getUserInfos()
      },
      async handleDelete (id) {
        let result = await deleteUserInfo(id)
        if (result.retCode === 200) {
          this.$message('删除成功！')
          this.getUserInfos()
        }
      }
    },
    mounted () {
      this.getUserInfos()
    }
  }
</script>
<style>
  .centerClass {
    text-align: center;
  }
</style>
