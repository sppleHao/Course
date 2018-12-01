<template>
  <div>
    <div v-for="round in rounds" :key="round.roundOrder">
      <mt-header  :title="`第${round.roundOrder}轮`">
      </mt-header>
      <mt-cell v-for="seminar in round.seminars" is-link
               :key="seminar.id"
               :title="seminar.topic"
               :to="{name:'StudentMobileSeminarIndex',params:{courseId,classId,seminarId:seminar.id},query:{courseName}}"></mt-cell>
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
  props:['rounds','courseId','classId','courseName'],
  methods:{

  }
}
</script>

<style scoped>

</style>
