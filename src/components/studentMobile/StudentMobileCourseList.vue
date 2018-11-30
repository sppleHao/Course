<template>
  <ul>
    <mt-cell v-for="course in courses" :key="course.id"
             v-bind:title="course.name" is-link
             :to="{path:`/studentMobile/course/${course.id}`}">
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
