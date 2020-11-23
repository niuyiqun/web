<template>
  <div>
    <table class="content">
      <tr>
        <td colspan="6" style="font-size: 16px;font-weight: bold;color: #304156 ">个人基本信息</td>
      </tr>
      <tr>
        <td colspan="1" width="300">姓名</td>
           <td colspan="1">  {{baseInfo.perName}}</td>
      </tr>
      <tr>
        <td colspan="1">手机号</td>
        <td colspan="1"> <el-input v-model="baseInfo.mobilePhone" placeholder="请输入手机号" /></td>
      </tr>
      <tr>
        <td colspan="1">性别</td>
        <td colspan="1">
          <el-input v-model="baseInfo.gender" placeholder="请输入男或女" />
        </td>
      </tr>
      <tr>
        <td colspan="1">邮箱</td>
        <td colspan="1">
          <el-input  v-model="baseInfo.email" placeholder="请输入邮箱" />
        </td>
      </tr>
    </table>
    <div align="center">
      <el-button type="primary"  @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
  import { adminDetail } from '@/api/student'
  import { adminEdit } from '@/api/student'
    export default {
        name: "baseInformation",
      data() {
        return {
          baseInfo: {
            perName: '',
            email: '',
            gender: '',
            mobilePhone: ''
          }
        }
      },
      created() {
          this.getData()
      },
      methods:{
        getData(){
          adminDetail().then(res => {
            this.baseInfo = res.data
          })

        },
        submit(){
          adminEdit(this.baseInfo).then(res => {
               if(res.errno == 0){
                 this.$message({
                   type: 'sucess',
                   message: '提交成功'
                 })
               }
          })
        }
      }
  }
</script>

<style scoped>

</style>
