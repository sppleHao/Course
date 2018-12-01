<template>
  <div>
    <div v-for="team in teams" :key="team.id">
      <!--队伍列表-->
      <mt-cell v-if="team.id" :title="team.order.toString()" :label="team.name">
        <!--显示成绩-->
        <span v-if="isScore">
            4
        </span>
        <!--下载PPT-->
        <mt-button v-if="isPpt" @click>

        </mt-button>
        <!--报名-->
        <span v-if="isReport">

        </span>
      </mt-cell>

      <!--报名-->
      <mt-cell v-else-if="isSignUp" :title="team.order.toString()">
        <mt-button type="primary" @click="signUp">点击报名</mt-button>
      </mt-cell>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SeminarTeamList",
        methods:{
          signUp:function () {
            MessageBox.confirm('确认报名？').then(action=>{

            })
          },
          downloadPPT:function () {

          },
          downloadReport:function () {

          },
          toShowScore:function () {

          }
        },
        props:['seminarId','teams'],
        data() {
          return{
            isSignUp:false,
            isPpt:false,
            isScore:false,
            isReport:false,
            scores:[{teamId:'3',score:'4'}],
            preFileUrls:[{teamId:'3',url:'localhost:3000/download/pre'}],
            reportFileUrls:[{teamId:'3',url:'localhost:3000/download/report'}],
          }
        },
        created(){

        },
        computed(){
          //通过seminarId、teamId获得队伍成绩、ppt下载、书面报告分数
          score:function f() {
            
          }
          this.teams.forEach((team)=>{
            
          })
        }
    }
</script>

<style scoped>

</style>
