<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="headTitle"></student-mobile-header>
    </div>
    <div class="container">
      <div v-if="isSignUp">
        <student-mobile-seminar-team-list :teams="teamsInOrder" is-sign-up="true"></student-mobile-seminar-team-list>
      </div>
      <div v-if="isPpt">
        <student-mobile-seminar-team-list :teams="teamsInOrder" is-ppt="true"></student-mobile-seminar-team-list>
      </div>
      <div v-if="isReport">
        <student-mobile-seminar-team-list :teams="teamsInOrder" is-report="true"></student-mobile-seminar-team-list>
      </div>
      <div v-if="isScore">
        <student-mobile-seminar-team-list :teams="teamsInOrder" is-score="true"></student-mobile-seminar-team-list>
      </div>
      <div v-if="isCancelSignUp">
        <student-mobile-seminar-team-list :teams="teamsInOrder" is-cancel-sign-up="true"></student-mobile-seminar-team-list>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import StudentMobileSeminarTeamList from "../../../../components/studentMobile/StudentMobileSeminarTeamList";
  import StudentMobileHeader from "../../../../components/studentMobile/StudentMobileHeader";
  export default {
    components: {StudentMobileHeader, StudentMobileSeminarTeamList},
    data () {
      return {
        headTitle:'',
        teams:null,
        teamNumLimit:null,
        isSignUp:false,
        isPpt:false,
        isReport:false,
        isScore:false,
        isCancelSignUp:false
      }
    },
    created(){
      //确定操作
      switch (this.$route.params.operation){
        case 'ppt':{
          this.isPpt=true
          this.headTitle='下载ppt'
          break
        }
        case 'signUp':{
          this.isSignUp=true
          this.headTitle='讨论课报名'
          break
        }
        case 'report':{
          this.isReport=true
          this.headTitle='下载书面报告'
          break
        }
        case 'score':{
          this.isScore=true
          this.headTitle='查看展示成绩'
          break
        }
        case 'cancelSignUp':{
          this.isCancelSignUp=true
          this.headTitle='报名情况'
          break
        }
      }

      //通过seminarId获得队伍数量限制

      //test
      this.teamNumLimit=6

      // 通过seminarId和classId获得已经报名的队伍
      //test
      this.teams = [
        {preOrder:'1',id:'3',name:'1-3',preFileUrl:'localhost:3000/preFileUrl/1',reportFileUrl:'localhost:3000/reportFileUrl/1',preScore:'1'},
        // {preOrder:'2',id:'5',name:'1-5',preFileUrl:'localhost:3000/preFileUrl/1',reportFileUrl:'localhost:3000/reportFileUrl/1',preScore:'2'},
        {preOrder:'3',id:'2',name:'1-2',preFileUrl:'localhost:3000/preFileUrl/1',reportFileUrl:'localhost:3000/reportFileUrl/1',preScore:'3'},
        {preOrder:'4',id:'1',name:'1-1',preFileUrl:'localhost:3000/preFileUrl/1',reportFileUrl:'localhost:3000/reportFileUrl/1',preScore:'2'},
        {preOrder:'5',id:'6',name:'1-6',preFileUrl:'localhost:3000/preFileUrl/1',reportFileUrl:'localhost:3000/reportFileUrl/1',preScore:'5'},
        {preOrder:'6',id:'10',name:'1-10',preFileUrl:'localhost:3000/preFileUrl/1',reportFileUrl:'localhost:3000/reportFileUrl/1',preScore:'4'},
      ]
    },
    computed:{
      //获得排好序的teams并填补空位
      teamsInOrder: function () {
        let t = []
        this.teams.forEach((team)=>{
          t[team.preOrder-1] = team
        })
        for (let i = 0;i<this.teamNumLimit;i++){
          if (!t[i]){
            t[i] = {preOrder:`${i+1}`,id:null,name:'',preFileUrl:null,reportFileUrl:null,preScore:null}
          }
        }
        return t
      }
    },
    methods:{
      //通过seminarId获得队伍数量限制
      getTeamNumLimint:function (url,seminarId) {
        axios.get(url,{seminarId})
          .then((res)=>{
            return res.data.teamNumLimit
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
