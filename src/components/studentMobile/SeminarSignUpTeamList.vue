<template>
  <div>
    <div v-for="team in teams" :key="team.preOrder">
      <mt-cell v-if="team.id" :title="`第${team.preOrder}组`" :value="team.name"></mt-cell>
      <mt-cell v-else :title="`第${team.preOrder}组`">
        <mt-button type="primary" @click="signUp">点击报名</mt-button>
      </mt-cell>
    </div>
  </div>
</template>

<script>
    import {MessageBox} from 'mint-ui'
    export default {
        name: "SeminarSignUpTeamList",
        props:['teams'],
        methods:{
          signUp:function (event) {
            MessageBox.confirm('确认报名？').then(action=>{
              //通过teamId和seminarId报名讨论课
              let teamId = sessionStorage.getItem('teamId')
              //todo ...
              this.$router.go(-1)
            })
          }
        }
    }
</script>

<style scoped>

</style>
