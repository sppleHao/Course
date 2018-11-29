<template>
  <mt-header fixed v-bind:title="headTitle">
    <router-link to="" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
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
  }
}
</script>

<style scoped>

</style>
