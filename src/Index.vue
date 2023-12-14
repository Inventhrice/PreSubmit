<script>
  export default{
    data(){
      return{
        currentTab: ''
      }
    }
  }
</script>

<template>
  <headerModule />
  <aboutBlurb v-if="currentTab = 'about'" />

</template>

<style scoped>

</style>
