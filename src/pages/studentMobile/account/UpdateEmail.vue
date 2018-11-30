<template>
  <div>
    <mt-field label="邮箱" v-model="email"></mt-field>
    <mt-field label="验证码" v-model="captcha"></mt-field>
    <mt-button>发送验证码</mt-button>
  </div>
</template>

<script>
    export default {
        name: "UpdateEmail"
    }
</script>

<style scoped>

</style>
