<script>
import listTemplates from "./components/listTemplates.vue"
  export default{
    components:{
      'listTemplates': listTemplates
    }
  }
</script>

<template>
  <headerModule :activeTab="0" />
  <listTemplates />
</template>

<style scoped>

</style>
