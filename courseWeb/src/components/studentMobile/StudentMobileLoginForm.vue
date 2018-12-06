<template>
    <div>
      <mt-field label="学号" placeholder="请输入学号" v-model="user.account"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" v-model="user.password"></mt-field>
      <mt-button type="primary" @click="checkLogin(checkLoginUrl,user)">登陆</mt-button>
      <mt-button type="default" @click="findBackPassword">忘记密码</mt-button>
    </div>
</template>

<script>
  import axois from  'axios';
  import {Toast,Indicator} from 'mint-ui'
    export default {
      name: "StudentMobileLoginForm",
      data () {
          return {
            user:{
              account:'',
              password:'',
            },
            isActive:false,
            //todo
            checkLoginUrl:''
          }
      },
      methods: {
        //登陆验证
        checkLogin: function (url,params) {
            //加载图标
            //this.$indicator.open()

            //通过account和password登陆验证
            // axois.post(url,params)
            //   .then((res)=>{
            //
            //     let responseData = {
            //       userId:'',
            //       isActive:''
            //     }
            //
            //     responseData = res.data;
            //
            //     let userId = responseData.userId
            //     this.isActive = responseData.isActive
            //
            //     //通过sessionStorage存储userId作为token，account用来验证
            //     sessionStorage.setItem('userId',userId)
            //     sessionStorage.setItem('account',this.user.account);
            //
            //     //关闭加载图标
            //     this.$indicator.close()
            //
            //     //弹出提示
            //     Toast({
            //       message: '登陆成功',
            //       iconClass: 'icon icon-success'
            //     })

                if (this.isActive){
                  //如果账户是激活的，跳转到首页
                  this.$router.push({name:'StudentMobileAccountIndex',query:{selected:'我的'}})
                }
                else {
                  //如果账户没有激活，跳转到激活界面
                  this.$router.push({name:'StudentMobileActive'})
                }

            //   })
            //   .catch((error)=>{
            //     this.$indicator.close()
            //     Toast({
            //       message: '错误',
            //       iconClass: 'icon icon-fail'
            //     })
            //     console.log(error)
            // })
          },
        //跳转到找回密码页
        findBackPassword: function () {
          this.$router.push({name:'StudentMobileFindBackPassword'})
        }
      }
    }
</script>

<style scoped>

</style>
