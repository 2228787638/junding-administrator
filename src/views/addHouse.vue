<template>
    <div>
     <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="房源名称">
          <el-input class="input-width" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="房源类型">
           <el-select v-model="form.hosuseFlag" placeholder="">
             <el-option v-for="item in housesType"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
        </el-form-item>
        <el-form-item label="户型">
         <el-input type="number" class="house-type-input" v-model="form.room" placeholder="">
           <template slot="append">室</template>
         </el-input>
          <el-input type="number" class="house-type-input" v-model="form.hall" placeholder="">
           <template slot="append">厅</template>
         </el-input>
           <el-input type="number" class="house-type-input" v-model="form.bathroom" placeholder="">
           <template slot="append">卫</template>
         </el-input>
        </el-form-item>
        <el-form-item label="面积">
          <el-input class="house-detail-input" type="number" min="0" v-model="form.area" placeholder="">
            <template slot="append">㎡</template>
          </el-input>
        </el-form-item>
        <el-form-item label="售价">
          <el-input class="house-detail-input" type="number" min="0" v-model="form.money" placeholder="">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="电梯">
          <el-radio v-model="form.elevator" label="有">有</el-radio>
          <el-radio v-model="form.elevator" label="无">无</el-radio>
        </el-form-item>
        <el-form-item label="装修级别">
          <el-radio v-model="form.decoration" label="普装">普装</el-radio>
          <el-radio v-model="form.decoration" label="普装">普装</el-radio>
        </el-form-item>
        <el-form-item label="房源图片">
          <el-upload
            action=""
            multiple
            :limit="6"
            :on-exceed="handleExceed"
            :file-list="imgList"
            on-success="handleSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过6张</div>
          </el-upload>
        </el-form-item>
         <el-form-item label="房源特色">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        form: {
          title: '',
          houseFlag: '',
          type: '',
          area: '',
          money: '',
          content: '',
          decoration: '',
          city: '',
          town: '',
          region: '',
          room: '',
          hall: '',
          bathroom: '',
          elevator: '',
          direction: '',
          houseResourcesImages: {
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: '',
            video: ''
          }
        },
        imgList: [],
        housesType: [{
          label: '新房',
          value: 'NEW'
        }, {
          label: '二手房',
          value: 'OLD'
        }, {
          label: '租房',
          value: 'RENT'
        }]
      }
    },
    components: {},
    methods: {
      handleSuccess () {
        console.log('上传成功')
      },
      handleExceed () {
        console.log('上传超出限制')
      }
    }
  }
</script>
 <style scoped>
 .input-width{
   width: 40%;
 }
 .house-type-input{
   width: 10%;
   padding-right: 20px;
 }
 .house-detail-input{
   width: 15%;
 }
</style>
