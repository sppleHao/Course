<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="headTitle"></student-mobile-header>
    </div>
    <div class="container">
      <!--操作-->
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
        presentationTeams:null,
        teamNumLimit:null,
        isSignUp:false,
        isPpt:false,
        isReport:false,
        isScore:false,
        isCancelSignUp:false,
        getTeamNumLimitUrl:'',
      }
    },
    created(){
      //通过参数确定操作
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
      // this.getTeamNumLimit(this.getTeamNumLimitUrl,{seminarId:this.seminarId});
      //test
      this.teamNumLimit=6

      let classId = sessionStorage.getItem('classId')
      // 通过seminarId和classId获得已经报名的队伍



      //test
      this.presentationTeams = [
        {preOrder:'1',teamId:'3',teamName:'1-3',preFileUrl:'localhost:3000/preFileUrl/3',preFileName:'1-3.pptx',reportFileUrl:'localhost:3000/reportFileUrl/3',reportFileName:'1-3.pdf',preScore:'1'},
        // {preOrder:'2',teamId:'5',teamName:'1-5',preFileUrl:'localhost:3000/preFileUrl/1',preFileName:'',reportFileUrl:'localhost:3000/reportFileUrl/1',reportFileName:'',preScore:'2'},
        {preOrder:'3',teamId:'2',teamName:'1-2',preFileUrl:'',preFileName:'',reportFileUrl:'localhost:3000/reportFileUrl/1',reportFileName:'1-3.pdf',preScore:'3'},
        {preOrder:'4',teamId:'1',teamName:'1-1',preFileUrl:'localhost:3000/preFileUrl/1',preFileName:'1-1.pptx',reportFileUrl:'',reportFileName:'',preScore:'2'},
        {preOrder:'5',teamId:'6',teamName:'1-6',preFileUrl:'localhost:3000/preFileUrl/6',preFileName:'1-6.pptx',reportFileUrl:'localhost:3000/reportFileUrl/6',reportFileName:'1-6.pdf',preScore:'5'},
        {preOrder:'6',teamId:'10',teamName:'1-10',preFileUrl:'',preFileName:'',reportFileUrl:'',reportFileName:'',preScore:'4'},
      ]
    },
    computed:{
      //获得排好序的teams并填补空位
      teamsInOrder: function () {
        let t = []
        this.presentationTeams.forEach((team)=>{
          t[team.preOrder-1] = team
        })
        for (let i = 0;i<this.teamNumLimit;i++){
          if (!t[i]){
            let team = {
              teamName:'',
              tamId:'',
              preOrder:`${i+1}`,
              preFileUrl:'',
              preFileName:'',
              reportFileUrl:'',
              reportFileName:'',
              preScore:''
            }
            t[i] = team
          }
        }
        return t
      }
    },
    methods:{
      //通过seminarId获得队伍数量限制
      getTeamNumLimit:function (url,params) {
        axios.get(url,{params:{params}})
          .then((res)=>{

            let responseData = {
              teamNumLimit:''
            }

            responseData = res.data

            this.teamNumLimit = responseData.teamNumLimit

          })
          .catch((err)=>{
            console.log(err)
          })
      },
      getSignUpTeams:function (url,params) {
        axios.get(url,params)
          .then(res=>{

            let responseData = {
              teamName:'',
              tamId:'',
              preOrder:'',
              preFileUrl:'',
              preFileName:'',
              reportFileUrl:'',
              reportFileName:'',
              preScore:''
            }

            responseData = res.data

            this.presentationTeams = responseData

          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
</style>
