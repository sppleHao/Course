<template>
  <ul>
    <!--列出所有选课的列表,点击进入课程界面-->
    <mt-cell v-for="course in courses" :key="course.id"
             v-bind:title="course.name" is-link
             :to="{name:'StudentMobileCourseSelect',params:{courseId:course.id},query:{courseName:course.name}}">
    </mt-cell>
  </ul>
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
