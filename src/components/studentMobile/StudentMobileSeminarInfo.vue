<template>
    <div>
      <mt-cell title="轮次:" :value="course.roundNum"></mt-cell>
      <mt-cell title="主题" :value="course.seminarTitle"></mt-cell>
      <mt-cell title="课次序号" :value="course.seminarOrder"></mt-cell>
      <mt-cell title="要求" :value="course.content" label="课堂讨论每个小组15分钟"></mt-cell>
      <mt-cell title="课程情况" :value="course.status"></mt-cell>
    </div>
</template>

<script>
export default {
  name: "StudentMobileSeminarInfo",
  props:['course']
}
</script>

<style scoped>

</style>
