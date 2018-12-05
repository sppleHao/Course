<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="selected"></student-mobile-header>
    </div>
    <div class="container">
      <!--页面-->
      <mt-tab-container v-model="selected">

        <!--课程选项-->
        <mt-tab-container-item id="课程">
          <student-mobile-course-list :courses="courses"></student-mobile-course-list>
        </mt-tab-container-item>

        <!--账户选项-->
        <mt-tab-container-item id="我的">
          <student-mobile-account-settings :user="user"></student-mobile-account-settings>
        </mt-tab-container-item>

      </mt-tab-container>
      <!--选择页面-->
      <mt-tabbar v-model="selected">
        <mt-tab-item id="课程">课程</mt-tab-item>
        <mt-tab-item id="我的">我的</mt-tab-item>
      </mt-tabbar>

    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileCourseList from "../../../components/studentMobile/StudentMobileCourseList";
    import StudentMobileAccountSettings from "../../../components/studentMobile/StudentMobileAccountSettings";
    export default {
      name: "AccountIndex",
      data () {
          return {
            selected:'我的',
            user:'',
            courses:'',
            //todo
            getCoursesUrl:'http://119.29.24.35:8000/courses/seminars',
            getAccountInformationUrl:''
          }
      },
      components: {StudentMobileAccountSettings, StudentMobileCourseList, StudentMobileHeader},
      created(){
        //获得selected
        this.selected = this.$route.query.selected

        //获得userId
        let userId = sessionStorage.getItem('userId')

        //通过userId查找用户拥有的所有课程
        this.getCourses(this.getCoursesUrl,{userId:userId})

        //test
        // this.courses = [
        //   {courseId: '1', courseName: 'OOAD'},
        //   {courseId: '2', courseName: 'J2EE'}]

        //通过userId查找用户的信息
        // this.getAccountInformation(this.getAccountInformationUrl,{userId:userId})

        //test
        this.user = {
          userName:'王二',
          email:'wanger@qq.com',
          account:'24320162200000',
          msgInterval:'5'
        }
      },
      methods:{
        //通过userId从后端查找所选择的课程
        getCourses:function (url,params) {
          axios.get(url,{params: {params}})
            .then((res)=>{

              let responseData = {
                courseId:'',
                courseName:''
              }

              responseData = res.data

              this.courses = responseData
            })
            .catch((err)=>{
              console.log(err)
            })
        },
        //通过userId从后端查找所选择的user信息
        getAccountInformation:function (url,params) {
          axios.get(url,{params: {params}})
            .then((res)=>{

              let responseData = {
                userName:'',
                email:'',
                account:'',
                msgInterval:''
              }

              responseData = res.data

              this.user = responseData
            })
            .catch((err)=>{
              console.log(err)
            })
        }
      }
    }
</script>

<style scoped>
</style>
