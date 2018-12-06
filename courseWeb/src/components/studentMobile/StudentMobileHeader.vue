<template>
  <mt-header v-bind:title="headTitle">
    <mt-button icon="back" @click="pageBack" slot="left"></mt-button>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
export default {
  name: "StudentMobileHeader",
  props:['headTitle', 'backURL'],
  data () {
    return {
    }
  },
  methods:{
    pageBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
