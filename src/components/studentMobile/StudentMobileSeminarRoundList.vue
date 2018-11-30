<template>
  <div>
    <div v-for="round in rounds" :key="round.roundNum">
      <mt-header  :title="roundNumToString(round.roundNum)">
      </mt-header>
      <mt-cell v-for="seminar in round.seminars" is-link
               :key="seminar.date"
               :title="seminar.title"
               :to="{path:`/studentMobile/course/${courseId}/seminar/${seminar.id}`}"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentMobileSeminarRoundList",
  data () {
    return {
      // rounds: [{roundNum: 1, courses: []}, {roundNum: 2, courses: []}]
    }
  },
  props:['rounds','courseId'],
  methods:{
    roundNumToString: function (roundNum)  {
        return `第${roundNum}轮`
    }
  }
}
</script>

<style scoped>

</style>
