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
          <student-mobile-account-settings></student-mobile-account-settings>
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
            account:'',
            courses:''
          }
      },
      components: {StudentMobileAccountSettings, StudentMobileCourseList, StudentMobileHeader},
      created(){
        //获得userId
        let userId = sessionStorage.getItem('userId')
        //通过userId从后端查找所选择的课程
        // axios.post('...',userId)
        //   .then((res)=>{
        //     this.course = res.data.courses
        //   })
        //   .catch((err)=>{
        //     console.log(err)
        //   })

        //test
        this.courses = [{id: '1', name: 'OOAD'}, {id: '2', name: 'J2EE'}]
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
