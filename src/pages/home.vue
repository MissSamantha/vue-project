<template>
  <div  style="overflow-y: hidden;"  >
    <el-container style="overflow-y: hidden" >
      <el-header>
        <div style="width: 16%;height: 60px;line-height: 60px" class="pull-left">
          <span class="companyName">某某公司</span>
        </div>
        <el-menu
          :default-active="activeIndex2"
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          active-text-color="blue">
          <el-menu-item index="1">处理中心</el-menu-item>
          <!--<el-submenu style="background-color: #8c939d" index="2">-->
            <!--<template slot="title" >我的工作台</template>-->
            <!--<el-menu-item style="color:blue " index="2-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
          <el-menu-item index="2">综合管理</el-menu-item>
          <el-menu-item index="3">治安处罚</el-menu-item>
          <div style="height: 60px;line-height: 60px" >
          <a style="margin-right: 30px" class="pull-right" href=""><span class="title">退出</span></a>
          </div>
        </el-menu>

      </el-header>
      <el-container>
        <div style="overflow: hidden">
        <el-aside width="200px">
          <div style="height: 100px;background-color:rgba(0,0,0,0.2);padding:25px 100px 0px 5px ">
            <el-col :span="20">
           <img class="headPortrait img-thumbnail" src="../assets/alexey.jpg">
            </el-col>
            <el-col :span="1">
              <table style="margin-top: 15px;width: 100px">
              <tr class="spanColor">&nbsp;mr.alexey</tr>
                <br/>
                <a href=""><tr class="spanColor"><i class="el-icon-setting"></i>setting</tr></a>
              </table>
            </el-col>
          </div>
          <el-menu
          default-active="2"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          text-color="#fff"
          active-text-color="blue">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu></el-aside>
        </div>
      <div style="overflow-y: auto;height: 600px">
        <el-main>
          <div class="main-container shadow">
          <transition name="slide-fade">
            <router-view></router-view>
          </transition>
        </div>
        </el-main>
      </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import ElCol from "element-ui/packages/col/src/col";
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  export default {
    components: {ElContainer, ElCol}, data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .el-menu-vertical{
    min-height: 462px;
  }
  .spanColor{
    color: white;
  }
  .companyName{
    color: white;
    /*padding-top: 50%;*/
    font-size:18px;
    font-family: "Microsoft YaHei";

  }
  .main-container {
    min-height:578px;
    /*background-color: #E7EBEC;*/
  }
  .headPortrait{
    height: 70px;
    border-radius: 50%;
  }
  /*.el-header, .el-footer {*/
    /*margin: 0px 10px 0px  10px;*/
    /*background-color: rgba(0,0,0,0.5);*/
    /*color: white;*/
    /*!*text-align: center;*!*/
    /*line-height: 100%;*/
  /*}*/
  /*.span{*/
    /*float: left;*/
  /*}*/
  .img-thumbnail {
    border: 3px solid rgba(255,255,255,0.3);
    background: none;
    padding: 0px;
  }
  .el-header{
    padding: 0 10px;
    /*box-sizing: border-box;*/
  }
  .el-menu{
    background-color: rgba(0,0,0,0.4);
    border:none;
    text-align: center;
    position: inherit;
  }
  .el-aside {
    margin:10px 0px 10px 10px;
    background-color:rgba(0,0,0,0.3);
    color: #333;
    text-align: center;
    line-height: 100%;
    position:inherit;
  }

  .el-main {
    margin: 10px;
    background-color: rgba(0,0,0,0.1);
    color: #333;
    text-align: center;
    line-height: 100%;
    padding: 5px;
    overflow: auto;

    /*height:585px;*/
  }

   .el-container {
    /*padding: 20px;*/
     overflow: hidden;
   height:100%;
    /*border: 1px solid #ebebf5;*/
     background:url("../assets/bg_num3.jpg") ;
  }

  .el-menu-item:hover {
    background-color:rgba(0,0,0,0.3);
  }
  .el-menu-item:active {
    background-color:rgba(0,0,0,0.3);
  }
  .el-submenu__title:hover {
    background-color: rgba(0,0,0,0.3);
  }
  ::-webkit-scrollbar{
    width: 0px;
    background: none;
  }
</style>
