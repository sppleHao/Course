<template>
  <div>
    <router-link :to="{name:'SeminarSignUp',params:{courseId,seminarId}}">
      <mt-button type="primary">报名</mt-button>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "SeminarIndexBeforeStart",
        props:['courseId','seminarId']
    }
</script>

<style scoped>

</style>
