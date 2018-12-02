<template>
    <div>
      <div class="header">
        <student-mobile-header :head-title="headTitle"></student-mobile-header>
      </div>
      <div class="container">
        <!--讨论课信息-->
        <div class="seminar-info">
          <student-mobile-seminar-info :seminar="seminar"></student-mobile-seminar-info>
        </div>
        <div class="operation">
          <!--不同状态的讨论课操作-->

          <!--未开始-->
          <student-mobile-seminar-operation-before-start v-if="seminar.status=='未开始'"
                                                         :course-id="courseId"
                                                         :seminar-id="seminarId"
          >
          </student-mobile-seminar-operation-before-start>

          <student-mobile-seminar-sign-up v-if="seminar.status=='已报名'"></student-mobile-seminar-sign-up>

          <student-mobile-seminar-processing v-if="seminar.status=='进行中'"></student-mobile-seminar-processing>

          <student-mobile-seminar-finished v-if="seminar.status=='已结束'"
                            :course-id="courseId"
                            :seminar-id="seminarId"></student-mobile-seminar-finished>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileSeminarInfo from "../../../components/studentMobile/StudentMobileSeminarInfo";
    import StudentMobileSeminarFinished from "../../../components/studentMobile/StudentMobileSeminarFinished";
    import StudentMobileSeminarProcessing from "../../../components/studentMobile/StudentMobileSeminarProcessing";
    import StudentMobileSeminarOperationBeforeStart
      from "../../../components/studentMobile/StudentMobileSeminarOperationBeforeStart";
    import StudentMobileSeminarSignUp from "../../../components/studentMobile/StudentMobileSeminarSignUp";
    export default {
        components: {
          StudentMobileSeminarSignUp,
          StudentMobileSeminarOperationBeforeStart,
          StudentMobileSeminarProcessing,
          StudentMobileSeminarFinished, StudentMobileSeminarInfo, StudentMobileHeader},
        props:['courseId','seminarId'],
        data () {
            return {
              headTitle:this.$route.query.courseName+'-讨论课',
              seminar:''
            }
        },
        created() {
          //通过seminarId获得讨论课的信息
          // this.seminar = this.getSeminarInfos('url',this.seminarId)

          //test
          this.seminar = {
            roundOrder:'2',topic:'业务流程分析',order:'2',
            intro:'界面导航图和界面原型设计',status:'已结束',
            signUpStartTime:'10.1.2018 12:00',signUpEndTime:'10.7.2018 12:00'}
          this.seminar.id = this.seminarId
        },
        methods:{
          //通过seminarId从后端获得讨论课的信息
          getSeminarInfos:function (URL,seminarId) {
            axios.get(URL,seminarId)
              .then((res)=>{
                return res.data.seminar
              })
              .catch((err)=>{
                console.log(err)
              })
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
