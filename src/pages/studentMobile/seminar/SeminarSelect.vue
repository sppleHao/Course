<template>
  <div>
    <div class="header">
      <student-mobile-header :head-title="headTitle"></student-mobile-header>
    </div>
    <div class="container">
      <!--顶栏-->
      <mt-navbar v-model="selected">
        <mt-tab-item id="全部">所有讨论课</mt-tab-item>
        <mt-tab-item id="已报名">已报名的讨论课</mt-tab-item>
      </mt-navbar>

      <!--主体-->
      <mt-tab-container v-model="selected">

        <!--所有讨论课-->
        <mt-tab-container-item id="全部">
          <student-mobile-seminar-round-list :course-id="courseId"
                                             :class-id="classId"
                                             :course-name="courseName"
                                             :rounds="rounds">
          </student-mobile-seminar-round-list>
        </mt-tab-container-item>

        <!--已报名的讨论课-->
        <mt-tab-container-item id="已报名">
          <student-mobile-seminar-round-list :course-id="courseId"
                                             :class-id="classId"
                                             :course-name="courseName"
                                             :rounds="roundsWithSignUp">
          </student-mobile-seminar-round-list>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>

</template>

<script>
import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
import StudentMobileSeminarRoundList from "../../../components/studentMobile/StudentMobileSeminarRoundList";
export default {
  components: {StudentMobileSeminarRoundList, StudentMobileHeader},
  data () {
    return {
      course:'',
      // classId:'',
      selected:'全部',
      //所有讨论课
      seminars:'',
      //已报名讨论课
      signUpSeminars:'',
      courseName: this.$route.query.courseName
    }
  },
  computed: {
    headTitle:function () {
      return this.courseName +'-'+this.classId
    },
    rounds: function () {
      return this.classifySeminarInRound(this.seminars)
    },
    roundsWithSignUp: function () {
      return this.classifySeminarInRound(this.signUpSeminars)
    }
  },
  methods:{
    classifySeminarInRound:function (seminars) {
      let r = []
      seminars.forEach((seminar) => {
        if (!r[seminar.roundNum - 1]) {
          var round = {}
          round.roundNum = seminar.roundNum
          round.seminars = []
          round.seminars.push(seminar)
          r[seminar.roundNum - 1] = round
        } else {
          r[seminar.roundNum - 1].seminars.push(seminar)
        }
      })
      return r
    }
  },
  created () {
    //通过courseId获得该课程所有讨论课

    //test
    this.seminars= [{id:'1', date: '10.8.2018', title: '业务流程分析', roundNum: 1},
      {id:'2', date: '10.22.2018', title: '领域模型设计', roundNum: 1},
      {id:'3', date: '11.3.2018', title: '代码检查', roundNum: 2},
      {id:'4', date: '11.18.2018', title: '对象模型设计', roundNum: 2}]

    //通过courseId和teamId获得队伍已报名的所有讨论课

    //test
    this.signUpSeminars = [{id:'2', date: '10.22.2018', title: '领域模型设计', roundNum: 1},
      {id:'3', date: '11.3.2018', title: '代码检查', roundNum: 2}]

  },
  props:['courseId','classId','teamId']
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
