<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="courseName"></student-mobile-header>
    </div>
    <div class="container">
      <!--点击进入该课程所在班级的讨论课界面-->
      <mt-cell title="讨论课" :to="{name:'StudentMobileSeminarSelect',params:{courseId,classId:classId},query:{courseName:courseName,className:className}}"></mt-cell>
      <mt-cell title="我的组队" :to="{name:'StudentMobileTeamIndex',params:{courseId,teamId:teamId}}"></mt-cell>
      <mt-cell title="我的成绩" :to="{name:'StudentMobileScoreIndex',params:{courseId,teamId:teamId}}"></mt-cell>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    export default {
        components: {StudentMobileHeader},
        data() {
          return{
            classId:'3',
            className:'2016(1)',
            teamId:'',
            courseName:this.$route.query.courseName
          }
        },
        props:['courseId'],
        created(){
          let userId = sessionStorage.getItem('userId')
          //通过userId和courseId获得teamId
          this.teamId = '1'
          sessionStorage.setItem('teamId',this.teamId)
          //通过teamId和courseId获得队伍所在班级
          // this.classId =
        },
        methods:{
          getTeam: function(){

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
