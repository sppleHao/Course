<template>
  <div>
    <div class="header">
      <student-mobile-header head-title="下载PPT"></student-mobile-header>
    </div>
    <div class="container">
      <student-mobile-seminar-team-list :teams="teamsInOrder"  is-report="true"></student-mobile-seminar-team-list>
    </div>
  </div>
</template>

<script>
    import StudentMobileHeader from "../../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileSeminarTeamList from "../../../../components/studentMobile/StudentMobileSeminarTeamList";
    export default {
      components: {StudentMobileSeminarTeamList, StudentMobileHeader}
    }
</script>

<style scoped>

</style>
