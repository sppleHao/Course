<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="OOAD讨论课"></student-mobile-header>
    </div>
    <div class="container">
      <seminar-sign-up-team-list :teams="teamsInOrder">
      </seminar-sign-up-team-list>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../../components/studentMobile/StudentMobileHeader";
    import SeminarSignUpTeamList from "../../../../components/studentMobile/SeminarSignUpTeamList";
    export default {
        name: "SignUp",
        components: {SeminarSignUpTeamList, StudentMobileHeader},
        data () {
          return {
            teams:[{order:1,name:'1-1'}],
            capacity:6
          }
        },
        created(){

        },
        computed:{
          teamsInOrder: function () {
            let t = []
            this.teams.forEach((team)=>{
              t[team.order-1] = team
            })
            for (let i = 0;i<this.capacity;i++){
              if (!t[i]){
                t[i] = {order:`${i+1}`,name:''}
              }
            }
            console.log(t)
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
