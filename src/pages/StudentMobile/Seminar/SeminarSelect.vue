<template>
  <div>
    <div class="header">
      <student-mobile-header :headTitle="headTitle"></student-mobile-header>
    </div>
    <div class="container">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">所有讨论课</mt-tab-item>
        <mt-tab-item id="2">已报名的讨论课</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <student-mobile-seminar-round-list :rounds="rounds"></student-mobile-seminar-round-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>


</template>

<script>
import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
import StudentMobileSeminarRoundList from "../../../components/studentMobile/StudentMobileSeminarRoundList";
export default {
  name: "SeminarSelect",
  components: {StudentMobileSeminarRoundList, StudentMobileHeader},
  data () {
    return {
      headTitle: 'OOAD',
      selected:'1',
      seminars: [{date: '10.8.2018', title: '业务流程分析', roundNum: 1}, {date: '10.22.2018', title: '领域模型设计', roundNum: 1},
        {date: '11.3.2018', title: '代码检查', roundNum: 2}, {date: '11.18.2018', title: '对象模型设计', roundNum: 2}]
    }
  },
  computed: {
    // totalRoundNum: function () {
    //   let roundNumbers = this.seminars.map((seminar) => {
    //     return seminar.roundNum
    //   })
    //   return Math.max.apply(Math, roundNumbers)
    // },
    rounds: function () {
      let r = []
      console.log(this.seminars)
      this.seminars.forEach((seminar) => {
        if (!r[seminar.roundNum - 1]) {
          var round = {}
          round.roundNum = seminar.roundNum
          round.courses = []
          round.courses.push(seminar)
          r[seminar.roundNum - 1] = round
        } else {
          r[seminar.roundNum - 1].courses.push(seminar)
        }
      })
      return r
    }
  }
}
</script>

<style scoped>
.header{
  top: 0;
  height: 10%;
}
.container{
  margin-top: 10%;
  height: 90%;
}
</style>
