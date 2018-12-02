<template>
    <div>
      <p v-if="account">发送验证码到邮箱{{email}}</p>
      <mt-field :readonly="account" placeholder="学号" v-model="account"></mt-field>
      <mt-field placeholder="新密码" v-model="password"></mt-field>
      <mt-field placeholder="确认密码" v-model="rePassword"></mt-field>
      <mt-field placeholder="验证码" v-model="captcha"></mt-field>
      <mt-button @click="sendCaptcha">发送验证码</mt-button>
      <mt-button type="primary" @click="updatePassword">修改密码</mt-button>
    </div>
</template>

<script>
    import axios from 'axios'
    import {Toast} from 'mint-ui'
    export default {
        name: "StudentMobileNewPasswordForm",
        data () {
          return {
            account:'',
            email:'',
            password:'',
            rePassword:'',
            captcha:'',
            //todo
            sendCaptchaUrl:'',
            updatePasswordUrl:''
          }
        },
        methods: {
          //发送验证码
          sendCaptcha: function () {
            //通过account发送验证码
            axios.post(this.sendCaptchaUrl, this.user.account)
              .then((res) => {
                Toast({
                  message: '验证码已发送至邮箱',
                  iconClass: 'icon icon-success'
                })
              })
              .catch((err) => {
                console.log(err)
              })
          },
          //修改密码
          updatePassword: function () {
            if (this.password != this.rePassword) {
              Toast({
                message: '两次密码输入不一致'
              })
            }
            let user = {
              account: this.account,
              password: this.password,
              captcha:this.captcha
            }

            axios.post(this.updatePasswordUrl,user)
              .then((res)=>{
                Toast({
                  message: '密码修改成功',
                  iconClass: 'icon icon-success'
                })

                this.$router.go(-1)

              })
              .catch((err)=>{
                Toast({
                  message: '修改失败',
                  iconClass: 'icon icon-success'
                })
                console.log(err)
              })
          }
        },
        created (){
          this.account= sessionStorage.getItem('account')
          this.email = this.$route.query.email
        }
    }
</script>

<style scoped>

</style>
