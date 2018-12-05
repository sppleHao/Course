<template>
    <div>
      <div class="header">
        <student-mobile-header :head-title="headTitle"></student-mobile-header>
      </div>
      <div class="container">
        <!--test-->
        <mt-radio
          title="报名状态（测试)"
          v-model="isTeamSignUp"
          :options="[true,false]"
        ></mt-radio>

        <mt-radio
          title="讨论课状态（测试）"
          v-model="seminar.seminarState"
          :options="['未开始', '进行中','已结束']">
        </mt-radio>

        <!--讨论课信息-->
        <div class="seminar-info">
          <student-mobile-seminar-info :is-team-sign-up="isTeamSignUp" :seminar="seminar"
                                       :presentation="presentation"
          ></student-mobile-seminar-info>
        </div>
        <div class="operation">
            <!--通过状态操作-->
            <student-mobile-seminar-operation-before-start v-if="seminar.seminarState=='未开始'"
                                                           :course-id="courseId"
                                                           :seminar-id="seminarId"
                                                           :is-team-sign-up="isTeamSignUp"
            >
            </student-mobile-seminar-operation-before-start>

            <student-mobile-seminar-processing v-if="seminar.seminarState=='进行中'"
                                               :seminar-topic="seminar.seminarTopic"
                                               :course-id="courseId"
                                               :seminar-id="seminarId"
                                               :is-team-sign-up="isTeamSignUp">
            </student-mobile-seminar-processing>

            <student-mobile-seminar-finished v-if="seminar.seminarState=='已结束'"
                                             :course-id="courseId"
                                             :seminar-id="seminarId"
                                             :is-team-sign-up="isTeamSignUp">
            </student-mobile-seminar-finished>

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
              seminar:'',
              isTeamSignUp:'',
              presentation:'',
              getSeminarUrl:'',//'http://119.29.24.35:8000/seminars/1'
              getTeamPresentationUrl:''
            }
        },
        created() {
          let seminarId = this.seminarId

          //通过seminarId获得讨论课的信息
          // this.getSeminar(this.getSeminarUrl,{seminarId:seminarId})

          let teamId = sessionStorage.getItem('teamId')

          //通过teamId和seminarId获得讨论课是否报名
          // this.getTeamPresentation(this.getTeamPresentationUrl,{teamId:teamId,seminarId:seminarId})

          //test
          this.seminar = {
            seminarId:this.seminarId,
            roundOrder:'2',
            seminarTopic:'业务流程分析',
            seminarOrder:'2',
            seminarIntro:'界面导航图和界面原型设计',
            seminarState:'未开始',
            signUpStartTime:'10.1.2018 12:00',
            signUpEndTime:'10.7.2018 12:00',
            reportDDL:'10.14.2018 12:00'
          }

          this.isTeamSignUp=false
        },
        methods:{
          //通过seminarId从后端获得讨论课的信息
          getSeminar:function (url,params) {
            axios.get(url,{params:{params}})
              .then((res)=>{

                let responseData = {
                  seminarId:'',
                  roundOrder:'',
                  seminarTopic:'',
                  seminarOrder:'',
                  seminarIntro:'',
                  seminarState:'',
                  signUpStartTime:'',
                  signUpEndTime:'',
                  isTeamSignUp:'',
                  reportDDL:''
                }

                responseData = res.data
                this.seminar = responseData
              })
              .catch((err)=>{
                console.log(err)
              })
          },
          //通过teamId和seminarId查找是否存在presentation
          getTeamPresentation:function (url,params) {
            axios.get(url,{params:{params}})
              .then((res)=>{

                let responseData = {
                  reportFileName:'',
                  reportFileUrl:'',
                  preFileName:'',
                  preFileUrl:''
                }

                responseData = res.data

                this.presentation = responseData

                this.isTeamSignUp = true
              })
              .catch(err=>{
                //todo handle error
                this.isTeamSignUp = false
              })
          }
        }
    }
</script>

<style scoped>
</style>
