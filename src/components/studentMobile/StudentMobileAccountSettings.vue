<template>
  <div>
    <mt-cell title="姓名" :value="user.name"></mt-cell>
    <mt-cell title="学号" :value="user.account"></mt-cell>
    <mt-cell title="邮箱" :value="user.email" is-link
             to=""></mt-cell>
    <mt-cell title="修改密码" is-link
             :to="{name:'StudentMobileFindBackPassword',query:{account:user.account,email:user.email}}"></mt-cell>
    <mt-cell title="通知时间" :value="`${user.msgInterval}h`"></mt-cell>
    <mt-button>退出登陆</mt-button>
  </div>
</template>

<script>
    export default {
        name: "StudentMobileAccountSettings",
        props:['user']
    }
</script>

<style scoped>

</style>
