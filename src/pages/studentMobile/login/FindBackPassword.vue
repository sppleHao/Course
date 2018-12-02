<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="找回密码"></student-mobile-header>
    </div>
    <div class="container">
      <student-mobile-new-password-form :email="null" ></student-mobile-new-password-form>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileNewPasswordForm from "../../../components/studentMobile/StudentMobileNewPasswordForm";
    export default {
        name: "FindBackPassword",
      components: {StudentMobileNewPasswordForm, StudentMobileHeader}
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
