<template>
  <div>
    <router-link :to="{name:'StudentMobileSeminarOperations',params:{courseId,seminarId,operation:'signUp'}}">
      <mt-button type="primary">报名或下载PPT</mt-button>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "StudentMobileSeminarOperationBeforeStart",
        props:['courseId','seminarId']
    }
</script>

<style scoped>

</style>
