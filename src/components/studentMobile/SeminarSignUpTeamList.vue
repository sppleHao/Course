<template>
  <div>
    <div v-for="team in teams" :key="team.order">
      <mt-cell v-if="team.name" :title="team.order.toString()" :value="team.name"></mt-cell>
      <mt-cell v-else :title="team.order.toString()">
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
          signUp:function () {
            MessageBox.confirm('确认报名？').then(action=>{

            })
          }
        }
    }
</script>

<style scoped>

</style>
