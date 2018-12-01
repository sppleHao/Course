<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="账号激活"></student-mobile-header>
    </div>
    <div class="container">
      <student-mobile-active-form></student-mobile-active-form>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileActiveForm from "../../../components/studentMobile/StudentMobileActiveForm";
    export default {
        name: "Active",
        components: {StudentMobileActiveForm, StudentMobileHeader}
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
