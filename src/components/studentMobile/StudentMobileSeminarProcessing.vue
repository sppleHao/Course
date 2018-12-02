<template>
    <div>
      <router-link :to="{name:'StudentMobileSeminarPresenting',params:{seminarId:this.seminarId,courseId:this.courseId},query:{seminarTopic:this.seminarTopic}}">
        <mt-button type="primary">进入讨论课</mt-button>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "StudentMobileSeminarProcessing",
        props:['courseId','seminarId','seminarTopic']
    }
</script>

<style scoped>

</style>
