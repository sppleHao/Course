<template>
    <div>
      <p v-if="isLogin">发送验证码到邮箱{{email}}</p>
      <mt-field v-if="isLogin" placeholder="学号"></mt-field>
      <mt-field placeholder="新密码"></mt-field>
      <mt-field placeholder="确认密码"></mt-field>
      <mt-field placeholder="验证码"></mt-field>
      <mt-button>发送验证码</mt-button>
    </div>
</template>

<script>
    export default {
        name: "NewPasswordForm",
        props:['isLogin','email']
    }
</script>

<style scoped>

</style>
