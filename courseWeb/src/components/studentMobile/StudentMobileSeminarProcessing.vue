<template>
    <div>

      <mt-button type="danger" @click="seminarProcess">进入讨论课</mt-button>
      <mt-button type="primary" @click="showPPT">下载ppt</mt-button>
      <mt-button type="primary" @click="showReport">下载书面报告</mt-button>

      <div v-if="isTeamSignUp">
        <mt-button type="primary" @click="showModal">PPT提交</mt-button>
        <mt-button type="primary" @click="showModal">书面报告提交</mt-button>

        <!--模态窗口-->
        <mt-popup v-model="popupVisible">
          <div>
            <mt-button @click="uploadFile">上传文件</mt-button>
            <mt-progress :value="percent" :bar-height="10">
              <div slot="end">{{Math.ceil(percent)}}%</div>
            </mt-progress>
          </div>
        </mt-popup>
      </div>

    </div>
</template>

<script>
    export default {
        name: "StudentMobileSeminarProcessing",
        props:['courseId','seminarId','seminarTopic','isTeamSignUp'],
      data() {
        return{
          popupVisible:false,
          percent:10
        }
      },
      methods: {
        showModal: function () {
          this.popupVisible = true
        },
        //进入下载ppt界面
        showPPT:function () {
          this.$router.push({name:'StudentMobileSeminarOperations',
            params:{seminarId:this.seminarId,courseId:this.courseId,operation:'ppt'}})
        },
        //进入下载报告界面
        showReport:function () {
          this.$router.push({name:'StudentMobileSeminarOperations',
            params:{seminarId:this.seminarId,courseId:this.courseId,operation:'report'}})
        },
        //进入正在进行的讨论课界面
        seminarProcess:function(){
          this.$router.push({name:'StudentMobileSeminarPresenting',
            params:{seminarId:this.seminarId,courseId:this.courseId},
            query:{seminarTopic:this.seminarTopic,isTeamSignUp:this.isTeamSignUp}})
        },
        //实时刷新进度条
        refreshProcess: function (progressEvent) {
          const _this = this
          let loaded = progressEvent.loaded
          let total = progressEvent.total
          _this.$nextTick(() => {
            _this.persent = (loaded / total) * 100
          })
        },
        //上传文件
        uploadFile: function (file) {
          // axios({
          //   url:'',
          //   method:'post',
          //   onUploadProgress:function (progressEvent) {
          //     if (progressEvent.lengthComputable){
          //         this.refreshProcess(progressEvent)
          //     }
          //   },
          //   data:file,
          // }).then((res)=>{
          //   if (res.status =='200'){
          //     console.log('上传成功')
          //   }
          // }).catch((error)=>{
          //   console.log(error)
          // })
        }
      }
    }
</script>

<style scoped>

</style>
