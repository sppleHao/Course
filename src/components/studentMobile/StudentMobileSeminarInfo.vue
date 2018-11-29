<template>
    <div>
      <mt-cell title="轮次:"></mt-cell>
      <mt-cell title="主题"></mt-cell>
      <mt-cell title="课次序号"></mt-cell>
      <mt-cell title="要求"></mt-cell>
      <mt-cell title="课程情况"></mt-cell>
    </div>
</template>

<script>
export default {
  name: "StudentMobileSeminarInfo",
  props:['roundNum','seminarTitle','seminarOrder','content','status']
}
</script>

<style scoped>

</style>
