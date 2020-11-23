<template>
<div class="app-container">
  <el-table
    :data="courseList"
    border
    style="width: 100%;"
    size="mini"
    :header-cell-style="{background:'#eef1f6 !important',color:'#606266',fontSize: '14px'}"
  >
    <el-table-column
      label="序号"
      fixed="left"
      width="70"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.$index+1 }}
      </template>
    </el-table-column>
    <el-table-column
      label="课程号"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.courseNum }}
      </template>
    </el-table-column>
    <el-table-column
      label="课程名"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.courseName }}
      </template>
    </el-table-column>
    <el-table-column
      label="课时"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.classHour+'学时' }}
      </template>
    </el-table-column>
    <el-table-column
      label="课程类型"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.courseType }}
      </template>
    </el-table-column>
    <el-table-column
      label="任课老师"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.teacher }}
      </template>
    </el-table-column>
    <el-table-column
      label="学期"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.term }}
      </template>
    </el-table-column>
    <el-table-column
      label="学分"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.credit }}
      </template>
    </el-table-column>
    <el-table-column
      label="上课地点"
      align="center"
      color="black"
    >
      <template slot-scope="scope">
        {{ scope.row.classLocation }}
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  import { getCourseList } from '@/api/student'
    export default {
        name: "course",
      data() {
        return {
          courseList:[],
        }
      },
      created() {
        this.getCourseData()
      },
      methods:{
        getCourseData(){
          getCourseList().then(res => {
            this.courseList = res.data
          })
        }
      }
    }
</script>

<style scoped>

</style>
