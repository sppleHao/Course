<template>
    <div>
      <mt-field label="学号" placeholder="请输入学号" v-model="user.name"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" v-model="user.password"></mt-field>
      <mt-button type="primary" @click="checkLogin">登陆</mt-button>
      <mt-button type="default" size="small">忘记密码</mt-button>
    </div>
</template>

<script>
  import {Toast,Indicator} from 'mint-ui'
    export default {
        name: "LoginForm",
      data () {
          return {
            user:{
              name:'',
              password:''
            }
          }
      },
      methods: {
          checkLogin: function () {
            //加载
            this.$indicator.open()

            //todo
            let result =true

            if (result){
              this.$indicator.close()
              Toast({
                message: '登陆成功',
                iconClass: 'icon icon-success'
              })
            }
          }
      }
    }
</script>

<style scoped>

</style>
