<template>
  <div>
    <div class="container">
    <div id="particlesLogin"></div>
    <el-form class="card-box" v-model="loginForm">
      <el-form-item><span class="welMsg loginText">某某公司欢迎您</span></el-form-item>
      <el-form-item>
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <input type="text" class="loginInput" placeholder="输入ID或用户名登录" v-model="loginForm.account">
      </el-form-item>
      <el-form-item>
        <i class="fa fa-lock" aria-hidden="true" style="font-size: 20px"></i>
        <input type="password" class="loginInput" placeholder="输入密码" v-model="loginForm.password">
      </el-form-item>
      <el-form-item>
        <el-button class="loginButton" type="primary" @click="login" >登录</el-button>
      </el-form-item>
        <el-checkbox class="pull-left"><span class="loginText">记住用户名</span></el-checkbox>
      <el-form-item style="height:20px">
      <a href="" class="pwd"><span style="font-size: 10px;" class="loginText">忘记密码？</span></a>
      </el-form-item>
        <a><span style="font-size: 13px" class="loginText" >还没注册帐号！</span></a>
    </el-form>
    </div>
  </div>
</template>
<script>
  export default {
      data(){
          return{
           loginForm: {
               account: '',
               password: ''
           }
          };
      },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(){
        let that = this;
        that.$router.push('/home');
      }
    }
  };
</script>
<style>
  /*input框中的图标样式*/
  i.fa { position: absolute; top: 13px; left: 8px;font-size: 16px;color:#8c939d }
  .pwd{
    float: right;
    color:#000;
    text-decoration:underline;
    text-decoration-color:white;
  }
  .welMsg{
    font-size: 18px;
  }
  .loginText{
    color: white;
  }
  .loginButton{
    width: 250px;
    border-radius: 15px;
  }
  #particlesLogin{
    position: absolute;
    width: 100%;
    height: 100vh;
    /*background: rgba(19, 30, 70, 1);*/
    background:url("../assets/main-content.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /*background: url(../assets/bg.jpg) no-repeat center center fixed;
    background-size: cover;*/
  }
  .card-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    /*background-color: #dfe5ec;*/
    border-radius: 5px;
    margin:0 auto;
    width: 250px;
    opacity: .99;
  }
  .loginInput{
    color: white;
    background-color:transparent;
    /*border-width: 0.5px;*/
    /*border-color: #f0f0f0;*/
    height: 30px;
    width:250px;
    border-radius: 15px;
    border:1px solid #cccccc ;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    text-indent:38px;
    /*outline:medium;*/ /*点击时不加边框*/
  }
  /*input点击边框样式*/
  input:focus{
    border-color: #3a8ee6!important;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,0.6);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,0.6);
  }
  ::-webkit-input-placeholder{
    font-size:13px;
    color: #8c939d;
  }

</style>
