<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="账号激活"></student-mobile-header>
    </div>
    <div class="container">
      <active-form></active-form>
    </div>
  </div>
</template>

<script>
    import ActiveForm from "../../../components/studentMobile/ActiveForm";
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    export default {
        name: "Active",
      components: {StudentMobileHeader, ActiveForm}
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
