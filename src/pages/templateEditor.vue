<script>
import conditions from "../components/condition.vue"
    export default{
        data(){
            return{
                listOfConditions: [
                    {conditionName: "CONDITIONNAME", fName: "fNAME", isEmpty: true, isExist: true, isFolder: false, extension: ".txt"},
                    {conditionName: "CONDITIONNAME2", fName: "fNAME2", isEmpty: true, isExist: true, isFolder: false, extension: ".txt"}
                ]
            }
        },
        components:{
            'IndividualConditon': conditions
        }
    }
</script>

<template>
    <div id="row h">
        <div v-for="singleCondition in listOfConditions">
        <IndividualConditon :input="singleCondition"/>
        </div>
    </div>
    <router-link to="/fileUpload" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Next</button>
    </router-link>
</template>