<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="讨论课报名"></student-mobile-header>
    </div>
    <div class="container">
      <student-mobile-seminar-team-list :teams="teamsInOrder" is-sign-up="true"></student-mobile-seminar-team-list>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileSeminarTeamList from "../../../../components/studentMobile/StudentMobileSeminarTeamList";
    export default {
        name: "SignUp",
        components: {StudentMobileSeminarTeamList,StudentMobileHeader},
        data () {
          return {
            teams:null,
            teamNumLimit:null
          }
        },
        created(){
          //通过seminarId获得队伍数量限制
          //test
          this.teamNumLimit=6

          // 通过seminarId和classId获得已经报名的队伍
          //test
          this.teams = [
            {preOrder:'1',id:'3',name:'1-3'},
            {preOrder:'2',id:'5',name:'1-5'},
            {preOrder:'4',id:'7',name:'1-7'},
            {preOrder:'6',id:'10',name:'1-10'},
          ]
        },
        computed:{
          //获得排好序的teams并填补空位
          teamsInOrder: function () {
            let t = []
            this.teams.forEach((team)=>{
              t[team.preOrder-1] = {preOrder:team.preOrder,id:team.id,name:team.name}
            })
            for (let i = 0;i<this.teamNumLimit;i++){
              if (!t[i]){
                t[i] = {preOrder:`${i+1}`,id:null,name:''}
              }
            }
            return t
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
