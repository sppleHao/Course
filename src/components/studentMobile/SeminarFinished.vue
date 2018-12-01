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
        methods:{
          showScore: function () {
            this.$router.push({name:'seminarScores',params:{seminarId,classId}})
          },
          showPPT:function () {
            this.$router.push({name:'seminarPPTs',params:{seminarId,classId}})
          },
          showReport:function () {
            this.$router.push({name:'seminarReports',params:{seminarId,classId}})
          }
        }
    }
</script>

<style scoped>

</style>
