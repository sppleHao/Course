<template>
  <div>
    <mt-button type="primary" @click="showScore">查看成绩</mt-button>
    <mt-button type="primary" @click="showPPT">下载ppt</mt-button>
    <mt-button type="primary" @click="showReport">下载书面报告</mt-button>
  </div>
</template>

<script>
    export default {
        name: "SeminarFinished",
        props:['seminarId','courseId'],
        methods:{
          showScore: function () {
            this.$router.push({name:'StudentMobileSeminarOperations',params:{seminarId:this.seminarId,courseId:this.courseId,operation:'score'}})
          },
          showPPT:function () {
            this.$router.push({name:'StudentMobileSeminarPptDownload',
              params:{seminarId:this.seminarId,courseId:this.courseId,operation:'ppt'}})
          },
          showReport:function () {
            this.$router.push({name:'StudentMobileSeminarOperations',params:{seminarId:this.seminarId,courseId:this.courseId,operation:'report'}})
          }
        }
    }
</script>

<style scoped>

</style>
