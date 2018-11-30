<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="课程"></student-mobile-header>
    </div>
    <div class="container">
      <mt-cell title="讨论课" :to="{path:`/studentMobile/course/${courseId}/seminar`}"></mt-cell>
      <mt-cell title="我的组队"></mt-cell>
      <mt-cell title="我的成绩"></mt-cell>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    export default {
        name: "CourseIndex",
        components: {StudentMobileHeader},
        props:['courseId']
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
