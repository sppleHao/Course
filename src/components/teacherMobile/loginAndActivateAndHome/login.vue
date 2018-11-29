<template>
  <div class="root">
    <div class="head">
      讨论课管理系统登录
    </div>
    <div class="main">
      <div class="input-div">
        <input class="input" placeholder="学号/教工号"/>
      </div>
      <div class="input-div">
        <input class="input" placeholder="登录密码"/>
        <i style="display: block;float: right;margin-right: 3%"><Icon type="ios-eye-outline" size="25"/></i>
      </div>
      <button class="button"><span>登录</span></button>
      <div class="a-dev"><a href="../accountAndSettings/MfindPassword" style="float:right;margin-right: 3%;">忘记密码</a></div>

      <div class="foot">初始登录默认密码为123456</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  .head{
    text-align: center;
    background: #f2f2f2;
    width:100%;
    height: 8%;
    border:1px solid transparent;
    font-family:思源黑体;
    font-size: 19px;
    color:#000;
    letter-spacing:1px;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  .root {
    height: 100%;
    width: 100%;
    background: #fff;
  }
  .main{
    margin-top: 8%;
    height: 85%;
    width: 100%;
  }
  .input-div{
    height: 9%;
    width: 100%;
    margin-top: 4%;
  }
  .input{
    background-color:#F2F2F2;
    border:0;
    height:100%;
    width:100%;
  }

  .input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { /* WebKit*/
    color:#CCCCCC;
    font-size:16px;
    padding: 5%;
  }
  .button {
    display: inline-block;
    background-color: #96c864;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    /*padding: 20px;*/
    height: 9%;
    width: 100%;
    margin-top: 9%;
  }
  .a-dev{
    margin-top:4%;
    width:100%;
    height: 5%
  }
  a{
    font-size: 14px;
    font-family:思源黑体;
  }
  .foot{
    color:#259B24;
    text-align: center;
    width:100%;
    position: fixed;
    bottom: 1%;
  }
</style>
