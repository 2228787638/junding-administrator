<template>
  <div>
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
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total*10"
      @current-change="current_change">
    </el-pagination>
  </div>
</template>

<script>
  import {listUserInfos} from '../api/getData'

  export default {
    data () {
      return {
        tableData: [],
        total: 0,
        pagesize: 1,
        currentPage: 1
      }
    },
    methods: {
      async getUserInfos () {
        let userInfos = await listUserInfos(this.currentPage - 1, this.pagesize)
        this.tableData = userInfos.data.content
        this.total = userInfos.data.totalPages
      },
      current_change: function (currentPage) {
        this.currentPage = currentPage
        this.getUserInfos()
      }
    },
    mounted () {
      this.getUserInfos()
    }
  }
</script>
