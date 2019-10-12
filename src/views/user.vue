<template>
  <div>
    <p>当前用户总数：<el-tag>{{totalElements}}</el-tag></p>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="头像"
        width="180">
        <template slot-scope="scope">
          <span><img :src="scope.row.avatar"/></span>
        </template>
      </el-table-column>
      <el-table-column
        label="用户名"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.user.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="昵称"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.nickname }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.sex}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="地址"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="edit(scope.row.id)">编辑
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

    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
      <el-form :model="userInfo">
        <el-form-item label="用户名" label-width="120px" class="form-input">
          <el-input v-model="userInfo.user.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" label-width="120px" class="form-input">
          <el-input v-model="userInfo.nickname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="120px">
          <el-select v-model="userInfo.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" label-width="120px" class="form-input">
          <el-input v-model="userInfo.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {deleteUserInfo, getUserInfoById, listUserInfos} from '../api/getData'

  export default {
    data () {
      return {
        tableData: [],
        totalPages: 0,
        pagesize: 10,
        currentPage: 1,
        totalElements: 0,
        dialogFormVisible: false,
        userInfo: {
          user: {}
        }
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
          this.$message({
            message: '删除成功！',
            type: 'success'
          })
          this.getUserInfos()
        }
      },
      async getUserInfoById (id) {
        let result = await getUserInfoById(id)
        if (result.retCode === 200) {
          this.userInfo = result.data
        }
      },
      edit (id) {
        this.dialogFormVisible = true
        this.getUserInfoById(id)
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
  .form-input{
    width: 70%;
  }
</style>
