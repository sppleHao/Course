<template>
  <div>
    <div v-for="team in teams" :key="team.teamId">

      <!--如果是本组-->
      <mt-cell class="is-my-team" v-if="team.teamId==teamId" :title="`第${team.preOrder}组`" :label="`${team.teamName}(本组)`">
        <span class="is-my-team" v-if="isScore">
          {{team.preScore}}
        </span>
        <mt-button v-else-if ="isReport" @click="fileDownload(url=`${team.reportFileUrl}`)">
          下载书面报告
        </mt-button>
        <mt-button v-else  @click="fileDownload(url=`${team.preFileUrl}`)">
          下载ppt
        </mt-button>
      </mt-cell>


      <!--非本组且不为空-->
      <mt-cell v-else-if="team.teamId" :title="`第${team.preOrder}组`" :label="team.teamName">

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

      <!--为空-->
      <mt-cell v-else :title="`第${team.preOrder}组`" label="空缺">
        <mt-button v-if="isSignUp" type="primary" @click="signUp">点击报名</mt-button>
      </mt-cell>

    </div>

    <div>
      <mt-button v-if="isCancelSignUp" type="danger" @click="cancekSignUp">
        取消报名
      </mt-button>
    </div>

  </div>
</template>

<script>
    import axios from 'axios'
    import {MessageBox,Toast} from 'mint-ui'
    export default {
        name: "StudentMobileSeminarTeamList",
        data(){
          return{
            teamId:'',
            signUpSeminarUrl:'',
            cancelSignUpSeminarUrl:''
          }
        },
        methods:{
          signUp:function (event) {
            MessageBox.confirm('确认报名？').then(action => {
              let teamId = sessionStorage.getItem('teamId')
              //todo 通过teamId和seminarId报名讨论课
              // axios.post(this.signUpSeminarUrl,{teamId,seminarId:this.seminarId})
              //   .then((res)=>{
              //
              //   })
              //   .catch((err)=>{
              //
              //   })
              Toast({
                message: `报名成功`,
                iconClass: 'icon icon-success'
              });
              this.$router.go(-1)
            })
          },
          fileDownload:function(url){
            MessageBox.confirm('确认下载？').then(action => {
              // todo 通过url下载文件
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
          },
          cancekSignUp:function () {
            MessageBox.confirm('确认取消报名？').then(action => {
              //todo 通过seminarId和teamId取消报名
              // axios.post(this.cancelSignUpSeminarUrl,{teamId,seminarId:this.seminarId})
              //   .then((res)=>{
              //
              //   })
              //   .catch((err)=>{
              //     console.log(err)
              //   })
              Toast({
                message: `取消成功`,
                iconClass: 'icon icon-success'
              });
              this.$router.go(-1)
            })
          }
        },
        props:['seminarId','teams','isSignUp','isScore','isPpt','isReport','isCancelSignUp'],
        created(){
          // this.teamId = sessionStorage.getItem('teamId')
          this.teamId = '1'
        },
        computed:{
        }
    }
</script>

<style scoped>
  .is-my-team{
      color: red;
  }
</style>
