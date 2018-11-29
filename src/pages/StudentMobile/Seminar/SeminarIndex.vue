<template>
    <div>
      <div class="header">
        <student-mobile-header :headTitle="headTitle"></student-mobile-header>
      </div>
      <div class="container">
        <div class="seminar-info">
          <student-mobile-seminar-info></student-mobile-seminar-info>
        </div>
        <div class="operation">
          <!--不同状态的讨论课操作-->
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import StudentMobileHeader from "../../../components/studentMobile/StudentMobileHeader";
    import StudentMobileSeminarInfo from "../../../components/studentMobile/StudentMobileSeminarInfo";
    export default {
        name: "SeminarIndex",
      components: {StudentMobileSeminarInfo, StudentMobileHeader},
      data () {
          return {
            headTitle:'OOAD-讨论课'
          }
      }
    }
</script>

<style scoped>

</style>
