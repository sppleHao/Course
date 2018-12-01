<template>
    <div>
      <mt-field label="学号" placeholder="请输入学号" v-model="user.account"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" v-model="user.password"></mt-field>
      <mt-button type="primary" @click="checkLogin">登陆</mt-button>
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
              isActive:''
            }
          }
      },
      methods: {
        //通过account和password登陆验证
        checkLogin: function () {
            //加载图标
            //this.$indicator.open()

            //通过后端验证
            // axois.post('http://localhost:3000/users/login',this.user)
            //   .then((response)=>{
            //     let save_token = {
            //       token:'123456', //response.body.data.token,
            //       user:{ //response.body.data.user
            //         account:'2817',
            //         userId:'1',
            //       }
            //     }
            //     localStorage.setItem('token',save_token.token)
            //     localStorage.setItem('account',save_token.user.account);
            //     localStorage.setItem('userId',save_token.user.id);
            //     this.$indicator.close()
            //     Toast({
            //       message: '登陆成功',
            //       iconClass: 'icon icon-success'
            //     })
            //     this.$router.push({path:'/studentMobile/account'})
            //   })
            //   .catch((error)=>{
            //     console.log(error)
            // })

          let save_token = {
            token:'123456', //response.body.data.token,
            user:{ //response.body.data.user
              account:this.user.account,
              userId:'1',
            }
          }
          sessionStorage.setItem('token',save_token.token)
          sessionStorage.setItem('account',save_token.user.account);
          sessionStorage.setItem('userId',save_token.user.id);

          if (this.user.isActive){
            this.$router.push({name:'StudentMobileAccountIndex'})
          }
          else {
            this.$router.push({name:'StudentMobileActive'})
          }


          },
        //找回密码跳转
        findBackPassword: function () {
          this.$router.push({path:'/studentMobile/findPassword'})
        }
      }
    }
</script>

<style scoped>

</style>
