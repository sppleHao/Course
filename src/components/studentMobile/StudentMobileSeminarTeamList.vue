<template>
  <div>
    <div v-for="team in teams" :key="team.id">

      <!--队伍列表-->

      <!--不为空-->
      <mt-cell v-if="team.id" :title="`第${team.preOrder}组`" :label="team.name">
        <!--显示成绩-->
        <span v-if="isScore">
          {{team.preScore}}
        </span>
        <!--显示书面报告-->
        <router-link v-else-if ="isReport" :to="team.reportFileUrl">
          <mt-button >
            下载书面报告
          </mt-button>
        </router-link>

        <!--下载PPT-->
        <router-link v-else :to="team.preFileUrl">
          <mt-button >
            下载ppt
          </mt-button>
        </router-link>
      </mt-cell>

      <!--为空报名-->
      <mt-cell v-else-if="isSignUp" :title="`第${team.preOrder}组`" label="虚位以待">
        <mt-button type="primary" @click="signUp">点击报名</mt-button>
      </mt-cell>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import {MessageBox} from 'mint-ui'
    export default {
        name: "StudentMobileSeminarTeamList",
        methods:{
          signUp:function (event) {
            MessageBox.confirm('确认报名？').then(action => {
              //通过teamId和seminarId报名讨论课
              let teamId = sessionStorage.getItem('teamId')
              //todo ...
              this.$router.go(-1)
            })
          }
        },
        props:['seminarId','teams','isSignUp','isScore','isPpt','isReport'],
        data() {
          return{
          }
        },
        created(){
        },
        computed:{
        }
    }
</script>

<style scoped>

</style>
