<template>
  <!--列出所有选课的列表,点击进入课程界面-->
  <div>
    <mt-cell v-for="course in courses" :key="course.courseId"
             v-bind:title="course.courseName" is-link
             :to="{name:'StudentMobileCourseSelect',params:{courseId:course.courseId},query:{courseName:course.courseName}}">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: "StudentMobileCourseList",
  data () {
    return {
    }
  },
  props: ['courses']
}
</script>

<style scoped>

</style>
