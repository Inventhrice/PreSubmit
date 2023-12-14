<script>
import listTemplates from "./components/listTemplates.vue"
  export default{
    data(){
      return{
        tabIndex: 3
      }
    },
    components:{
      'listTemplates': listTemplates
    }
  }
</script>

<template>
  <headerModule :activeTab="tabIndex" />
  <listTemplates />
  <aboutBlurb v-if="tabIndex === 3" />

</template>

<style scoped>

</style>
