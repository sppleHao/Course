<template>
  <div>
    <div v-for="round in rounds" :key="round.roundOrder">
      <mt-header  :title="`第${round.roundOrder}轮`">
      </mt-header>
      <mt-cell v-for="seminar in round.mySeminars" is-link
               :key="seminar.seminarId"
               :title="seminar.seminarTopic"
               :to="{name:'StudentMobileSeminarIndex',params:{courseId,classId,seminarId:seminar.seminarId},
               query:{courseName,seminarTopic:seminar.seminarTopic}}"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentMobileSeminarRoundList",
  data () {
    return {
    }
  },
  props:['rounds','courseId','classId','courseName','className'],
  methods:{

  }
}
</script>

<style scoped>

</style>
