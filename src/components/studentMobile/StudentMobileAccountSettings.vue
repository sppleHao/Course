<template>
  <div>
    <mt-cell title="姓名" value="王二"></mt-cell>
    <mt-cell title="学号" value="24320162208818"></mt-cell>
    <mt-cell title="邮箱" value="xxx@qq.com" is-link
             to="/studentMobile/updateEmail"></mt-cell>
    <mt-cell title="修改密码" is-link
             :to="{path:'studentMobile/findPassword'}"></mt-cell>
    <mt-cell title="通知时间" value="5h"></mt-cell>
    <mt-button>退出登陆</mt-button>
  </div>
</template>

<script>
    export default {
        name: "StudentMobileAccountSettings",
        props:['account']
    }
</script>

<style scoped>

</style>
