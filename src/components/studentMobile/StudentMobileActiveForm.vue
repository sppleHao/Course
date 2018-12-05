<template>
    <div>
      <mt-field placeholder="新密码" v-model="user.password"></mt-field>
      <mt-field placeholder="确认密码" v-model="user.rePassword"></mt-field>
      <mt-field placeholder="邮箱" v-model="user.email"></mt-field>
      <mt-field placeholder="验证码" v-model="user.captcha"></mt-field>
      <mt-button size="small" @click="sendCaptcha(sendCaptchaUrl,{account: user.account})">发送验证码</mt-button>
      <mt-button type="primary" @click="activeAccount(activeAccountUrl,user)">激活账号</mt-button>
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
              account:'',
              password:'',
              rePassword:'',
              email:'',
              captcha:'',
              userId:''
            },
            //todo
            sendCaptchaUrl:'',
            activeAccountUrl:''
          }
        },
        //通过sessionStorage获得userId和account
        created(){
          this.user.account=sessionStorage.getItem('account')
          this.user.userId=sessionStorage.getItem('userId')
        },
        methods:{
          //向邮箱发送验证码
          sendCaptcha:function(url,params){
            //通过account发送验证码
            axios.post(url,params)
              .then(res=>{
                Toast({
                  message: '验证码已发送至邮箱',
                  iconClass: 'icon icon-success'
                });
              })
              .catch((err)=>{
                console.log(err)
              })
          },
          //激活账号
          activeAccount:function (url,params) {
            //发送user信息
            // axios.post(url,params)
            //   .then(res=>{
            //     //动画
            //     Toast({
            //       message: '激活成功',
            //       iconClass: 'icon icon-success'
            //     });

                //跳转
                this.$router.push({name:'StudentMobileAccountIndex',query:{selected:'我的'}})
              // })
              // .catch(err=>{
              //   console.log(err)
              // })
          }
        }
    }
</script>

<style scoped>

</style>
