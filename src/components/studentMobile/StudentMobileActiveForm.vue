<template>
    <div>
      <mt-field placeholder="新密码" v-model="user.password"></mt-field>
      <mt-field placeholder="确认密码" v-model="user.rePassword"></mt-field>
      <mt-field placeholder="邮箱" v-model="user.email"></mt-field>
      <mt-field placeholder="验证码" v-model="user.captcha"></mt-field>
      <mt-button size="small" @click="sendCaptcha">发送验证码</mt-button>
      <mt-button type="primary" @click="activeAccont">激活账号</mt-button>
    </div>
</template>

<script>
    import axios from 'axios'
    import {Toast} from 'mint-ui'
    export default {
        name: "StudentMobileActiveForm",
        data() {
          return {
            user:{
              id:'',
              password:'',
              rePassword:'',
              email:'',
              captcha:'',
              token:''
            }
          }
        },
        //通过sessionStorage获得userId和token
        created(){
          this.user.id=sessionStorage.getItem('token')
          this.user.token=sessionStorage.getItem('token')
        },
        methods:{
          //发送验证码
          sendCaptcha:function(){

          },
          //激活账号
          activeAccont:function () {
            //通过axios后端激活

            //动画
            Toast({
              message: '激活成功',
              iconClass: 'icon icon-success'
            });

            //跳转
            this.$router.push({name:'StudentMobileAccountIndex'})
          }
        }
    }
</script>

<style scoped>

</style>
