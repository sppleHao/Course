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
        <mt-button v-else-if ="isReport" @click="fileDownload(url=`${team.reportFileUrl}`)">
            下载书面报告
        </mt-button>

        <!--下载PPT-->
        <mt-button v-else  @click="fileDownload(url=`${team.preFileUrl}`)">
            下载ppt
         </mt-button>
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
    import {MessageBox,Toast} from 'mint-ui'
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
          },
          fileDownload:function(url){
            MessageBox.confirm('确认下载？').then(action => {
              // axios.post(url)
              //   .then((res)=>{
              //      //todo 保存文件
              //   })
              //   .catch((err)=>{
              //     console.log(err)
              //   })
              Toast({
                message: `通过${url}下载文件`,
                iconClass: 'icon icon-success'
              });
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
