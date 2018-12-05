<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="courseName"></student-mobile-header>
    </div>
    <div class="container">
      <!--点击进入该课程所在班级的讨论课界面-->
      <mt-cell title="讨论课" :to="{name:'StudentMobileSeminarSelect',params:{courseId,classId:this.class.classId}
                                    ,query:{courseName:courseName,className:this.class.className}}"></mt-cell>
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
            class:{
              classId:'',
              className:''
            },
            teamId:'',
            courseName:this.$route.query.courseName,
            getTeamIdUrl:'',
            getClassUrl:''
          }
        },
        props:['courseId'],
        created(){
          let userId = sessionStorage.getItem('userId')

          //通过userId和courseId获得teamId
          // this.getTeamId(this.getTeamIdUrl,{userId:userId,courseId:this.courseId})

          //test
          this.teamId = '1'
          //保存teamId
          sessionStorage.setItem('teamId',this.teamId)


          //通过teamId和courseId获得队伍所在class
          // this.getClass(this.getClassUrl,{teamId:this.teamId,courseId:this.courseId})

          //test
          this.class={
            classId :'3',
            className: '2016(1)'
          }

          sessionStorage.setItem('classId',this.classId)

        },
        methods:{
          getTeamId: function(url,params){
            axios.get(url,{params:{params}})
              .then((res)=>{
                let resposeData={
                  teamId:''
                }

                resposeData = res.data

                this.teamId = resposeData.teamId
              })
              .catch(err=>{
                console.log(err)
              })
          },
          getClass:function (url,params) {
            axios.get(url,{params:{params}})
              .then((res)=>{

                let resposeData={
                  classId:'',
                  className:''
                }

                resposeData = res.data

                this.class = resposeData
              })
              .catch(err=>{
                console.log(err)
              })
          },
        }
    }
</script>

<style scoped>
</style>
