<template>
    <div>
      <mt-cell title="轮次:" :value="seminar.roundOrder"></mt-cell>
      <mt-cell title="主题" :value="seminar.seminarTopic"></mt-cell>
      <mt-cell title="课次序号" :value="seminar.seminarOrder"></mt-cell>
      <mt-cell title="要求" :value="seminar.seminarIntro" label="课堂讨论每个小组15分钟"></mt-cell>
      <mt-cell title="课程情况" :value="seminar.seminarState"></mt-cell>
      <mt-cell title="本组报名情况" :value="(isTeamSignUp?'已报名':'未报名')"></mt-cell>
      <mt-cell v-if="seminar.seminarState=='未开始'" title="报名开始时间" :value="seminar.signUpStartTime"></mt-cell>
      <mt-cell v-if="seminar.seminarState=='未开始'" title="报名结束时间" :value="seminar.signUpEndTime"></mt-cell>
      <mt-cell v-if="isTeamSignUp" title="PPT提交情况" :label="`截止日期${seminar.reportDDL}`">
        <span class="upload" v-if="presentation.preFileName">
          已提交
        </span>
        <span class="no-upload" v-else>
          未提交
        </span>
      </mt-cell>
      <mt-cell v-if="isTeamSignUp" title="书面报告提交情况" :label="`截止日期${seminar.reportDDL}`">
        <span class="upload" v-if="presentation.reportFileName">
          已提交
        </span>
        <span class="no-upload" v-else>
          未提交
        </span>
      </mt-cell>
    </div>
</template>

<script>
export default {
  name: "StudentMobileSeminarInfo",
  props:['seminar','isTeamSignUp','presentation']
}
</script>

<style scoped>
.no-upload{
  color: red;
}
.upload{
 color: green;
}
</style>
