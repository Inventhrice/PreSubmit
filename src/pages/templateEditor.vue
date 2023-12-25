<script>
import conditions from "../components/condition.vue"
    export default{
        data(){
            return{
                listOfConditions: [
                    {conditionName: "CONDITIONNAME", fName: "fNAME", isEmpty: true, isExist: true, isFolder: false, extension: ".txt"},
                    {conditionName: "CONDITIONNAME2", fName: "fNAME", isEmpty: true, isExist: true, isFolder: false, extension: ".txt"}
                    ]
            }
        },
        methods:{
            pushCondition(condition){
                listOfConditions.push(condition)
            }
        },
        components:{
            'IndividualConditon': conditions
        }
    }
</script>

<template>
    <div id="row h">
        <p>RENDER</p>
        <div v-for="singleCondition in listOfConditions">
        <IndividualConditon
         :conditionName=singleCondition.conditionName
         :fName="singleCondition.fName" 
         :isEmpty="singleCondition.isEmpty" 
         :isExist="singleCondition.isExist" 
         :isFolder="singleCondition.isFolder" 
         :extension="singleCondition.extension" />
        </div>
    </div>
    <router-link to="/fileUpload" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Next</button>
    </router-link>
</template>