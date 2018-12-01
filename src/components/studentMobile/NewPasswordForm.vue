<template>
    <div>
      <p v-if="account">发送验证码到邮箱{{email}}</p>
      <mt-field :readonly="new Boolean(account)" placeholder="学号" v-model="account"></mt-field>
      <mt-field placeholder="新密码" v-model="password"></mt-field>
      <mt-field placeholder="确认密码" v-model="rePassword"></mt-field>
      <mt-field placeholder="验证码" v-model="captcha"></mt-field>
      <mt-button @click="sendCaptcha">发送验证码</mt-button>
      <mt-button type="primary" @click="">修改密码</mt-button>
      <p v-if="isSend">验证码已发送到账号邮箱</p>
    </div>
</template>

<script>
    export default {
        name: "NewPasswordForm",
        data () {
          return {
            isSend:false,
            account:'',
            email:'',
            password:'',
            rePassword:'',
            captcha:''
          }
        },
        methods:{
          //发送验证码
          sendCaptcha: function () {
            //通过userId发送验证码
            this.isSend = true
          },
          updatePassword:function () {
            let user = {
              account:'',
              password:'',
              captcha:''
            }
          }
        },
        created (){
          this.account = this.$route.query.account
          this.email = this.$route.query.email
        }
    }
</script>

<style scoped>

</style>
