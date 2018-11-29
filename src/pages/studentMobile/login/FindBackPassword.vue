<template>
  <div>
    <div class="header">
      <student-mobile-header headTitle="找回密码"></student-mobile-header>
    </div>
    <div class="container">
      <new-password-form :is-login="false" :email="null" ></new-password-form>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import NewPasswordForm from "../../../components/studentMobile/NewPasswordForm";
    export default {
        name: "FindBackPassword",
      components: {NewPasswordForm, StudentMobileHeader}
    }
</script>

<style scoped>
  .header{
    top: 0;
    height: 10%;
  }
  .container{
    margin-top: 10%;
    height: 90%;
  }
</style>
