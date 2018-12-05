/*
个人页面即登陆成功后的首页
*/

<template>
  <div class="root" @click="closeMenu">
    <div class="head">
      <span style="visibility: hidden"><Icon type="ios-arrow-back" size="large"/></span>
      <span style="width:85%">我</span>
      <OCMenu></OCMenu>
    </div>
    <div class="main">
      <down-menu></down-menu>
      
    </div>
  </div>
</template>

<script>
    export default {
        name: "profile",
      data() {
        return {}
      },
      methods:{
        closeMenu:function(){
          const menu=document.getElementById("show");
          if(document.getElementById("show").style.display==="block"){
            if(!menu.contains(event.target)) document.getElementById("show").style.display="none";
          }
        }
      }
    }
</script>

<style scoped>
  .head{
    text-align: center;
    background: #96C864;
    width:100%;
    height: 8%;
    border:1px solid transparent;
    font-family:思源黑体;
    font-size: 2.5vmax;
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
    /*margin-top: 8%;*/
    height: 85%;
    width: 100%;
  }
</style>
