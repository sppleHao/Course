<template>
    <div>
      <div class="header">
        <student-mobile-header :headTitle="headTitle"></student-mobile-header>
      </div>
      <div class="container">
        <student-mobile-course-list :courses="courses"></student-mobile-course-list>
      </div>
    </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileCourseList from "../../../components/studentMobile/StudentMobileCourseList";
    export default {
        name: "CourseSelect",
      components: {StudentMobileCourseList, StudentMobileHeader},
      data () {
          return {
            headTitle:'讨论课',
            courses: [{id: '1', name: 'OOAD'}, {id: '2', name: 'J2EE'}]
          }
      }
    }
</script>

<style scoped>
.header{
  top: 0;
  height: 20%;
}
.container{
  margin-top: 20%;
  height: 80%;
}
</style>
