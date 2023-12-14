<script>
  export default{
    data(){
      return{
        tabIndex: 0
      }
    }
  }
</script>

<template>
  <headerModule :activeTab="tabIndex" />
  <aboutBlurb v-if="tabIndex === 3" />

</template>

<style scoped>

</style>
