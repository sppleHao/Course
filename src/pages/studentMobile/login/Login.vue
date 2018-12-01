<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="学生登陆"></student-mobile-header>
    </div>
    <div class="container">
      <student-mobile-login-form></student-mobile-login-form>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileLoginForm from "../../../components/studentMobile/StudentMobileLoginForm";
    export default {
        name: "login",
      data () {
          return {

          }
      },
      components: {StudentMobileLoginForm, StudentMobileHeader}
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
