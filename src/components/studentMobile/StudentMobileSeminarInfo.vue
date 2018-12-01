<template>
    <div>
      <mt-cell title="轮次:" :value="seminar.roundOrder"></mt-cell>
      <mt-cell title="主题" :value="seminar.topic"></mt-cell>
      <mt-cell title="课次序号" :value="seminar.order"></mt-cell>
      <mt-cell title="要求" :value="seminar.intro" label="课堂讨论每个小组15分钟"></mt-cell>
      <mt-cell title="课程情况" :value="seminar.status"></mt-cell>
      <mt-cell v-if="seminar.status=='未开始'" title="报名开始时间" :value="seminar.signUpStartTime"></mt-cell>
      <mt-cell v-if="seminar.status=='未开始'" title="报名结束时间" :value="seminar.signUpEndTime"></mt-cell>
    </div>
</template>

<script>
export default {
  name: "StudentMobileSeminarInfo",
  props:['seminar']
}
</script>

<style scoped>

</style>
