<template>
    <div>
      <div class="header">
        <student-mobile-header :head-title="headTitle"></student-mobile-header>
      </div>
      <div class="container">
        <mt-cell :class="{active:team.isActive}" v-for="team in teamsInOrder" :key="team.id" :title="`第${team.preOrder}组`">
          <span v-if="team.isActive" :class="{active:team.isActive}">
            {{team.name}}(展示中)
          </span>
          <span v-else>
            {{team.name}}
          </span>
        </mt-cell>
        <mt-button type="primary" @click="raise">提问</mt-button>
      </div>
    </div>
</template>

<script>
    import StudentMobileHeader from "../../../../components/studentMobile/StudentMobileHeader";
    export default {
        name: "Presenting",
        components: {StudentMobileHeader},
        data() {
          return{
            headTitle:`展示-${this.$route.query.seminarTopic}`,
            teams:null,
            teamNumLimit:''
          }
        },
        created(){
          this.teamNumLimit=6
          //test
          this.teams = [
            {preOrder:'1',id:'3',name:'1-3',isActive:false},
            {preOrder:'2',id:'5',name:'1-5',isActive:false},
            {preOrder:'3',id:'2',name:'1-2',isActive:true},
            {preOrder:'4',id:'7',name:'1-7',isActive:false},
            {preOrder:'5',id:'6',name:'1-6',isActive:false},
            {preOrder:'6',id:'10',name:'1-10',isActive:false},
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
          },
          raise:function () {

          }
        }
    }
</script>

<style scoped>
  .active{
    color: red;
  }
</style>
