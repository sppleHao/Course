<template>
    <div>
      <div class="header">
        <student-mobile-header :head-title="headTitle"></student-mobile-header>
      </div>
      <div class="container">
        <div class="seminar-info">
          <student-mobile-seminar-info :course="course"></student-mobile-seminar-info>
        </div>
        <div class="operation">
          <!--不同状态的讨论课操作-->
          <seminar-index-before-start v-if="course.status=='未开始'"></seminar-index-before-start>
          <seminar-processing v-if="course.status=='进行中'"></seminar-processing>
          <seminar-sign-up v-if="course.status=='已报名'"></seminar-sign-up>
          <seminar-finished v-if="course.status=='已结束'"></seminar-finished>
        </div>
      </div>
    </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileSeminarInfo from "../../../components/studentMobile/StudentMobileSeminarInfo";
    import SeminarFinished from "../../../components/studentMobile/SeminarFinished";
    import SeminarIndexBeforeStart from "../../../components/studentMobile/SeminarBeforeStart";
    import SeminarProcessing from "../../../components/studentMobile/SeminarProcessing";
    import SeminarSignUp from "../../../components/studentMobile/SeminarSignUp";
    export default {
        name: "SeminarIndex",
      components: {
        SeminarSignUp,
        SeminarProcessing,
        SeminarIndexBeforeStart, SeminarFinished, StudentMobileSeminarInfo, StudentMobileHeader},
      data () {
          return {
            headTitle:'OOAD-讨论课',
            course:{roundNum:'2',seminarTitle:'业务流程分析',seminarOrder:'2',
              content:'界面导航图和界面原型设计',status:'未开始'}
          }
      }
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
