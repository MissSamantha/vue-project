<template>
  <div>
    <!--<span  class="pull-left title">user</span>-->
    <el-card class="box-card pull-left" >
      <div  class="clearfix pull-left cardDiv">
        <span class="title">卡片名称</span>
      </div>
        <el-table
          :data="tableData"
         >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
           >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
           >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
    </el-card>
    <el-card style="width:42%;transform: translate(30px,0);" >
      <div  class="clearfix pull-left cardDiv">
        <span class="title">卡片名称</span>
      </div>
      <el-table
        :data="tableData"
     style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        >
        </el-table-column>
      </el-table>
    </el-card>
    <el-card style="margin-top: 30px" >
      <div  class="clearfix pull-left cardDiv">
        <span class="title">卡片名称</span>
      </div>
      <el-table
        :data="tableData"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
        ]
      }
    }
  }
</script>
<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 55%;
  }
  .el-card, .el-message {
    border-radius: 2px;
    overflow: hidden;
  }
  .el-card{
    background-color: rgba(0,0,0,0.3);
    border:none;
  }
  .el-card__body {
    padding: 0;
  }
  .el-table{
    line-height: 20px;
    background-color: #E7EBEC;
  }
  .cardDiv{
    height:40px;
    line-height: 40px;
    padding-left: 10px;
  }
  .el-card__header {
    border-bottom: 0;
  }
  .el-table td, .el-table th {
    padding: 7px 0;
  }
  .el-table th>.cell {
    text-align: center;
  }
</style>
