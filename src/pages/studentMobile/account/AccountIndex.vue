<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="selected"></student-mobile-header>
    </div>
    <div class="container">
      <!--页面-->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="课程">
          <student-mobile-course-list :courses="courses"></student-mobile-course-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <account-settings></account-settings>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--页面选项-->
      <mt-tabbar v-model="selected">
        <mt-tab-item id="课程">课程</mt-tab-item>
        <mt-tab-item id="我的">我的</mt-tab-item>
      </mt-tabbar>

    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import AccountSettings from "../../../components/studentMobile/AccountSettings";
    import CourseSelect from "../seminar/CourseSelect";
    import StudentMobileCourseList from "../../../components/studentMobile/StudentMobileCourseList";
    export default {
      name: "AccountIndex",
      data () {
          return {
            selected:'我的',
            account:'',
            courses: [{id: '1', name: 'OOAD'}, {id: '2', name: 'J2EE'}]
          }
      },
      components: {StudentMobileCourseList, CourseSelect, AccountSettings, StudentMobileHeader}
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
