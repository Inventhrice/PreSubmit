<script>
    export default{
        data(){
            return{
                listOfConditions: [
                    {conditionName: "CONDITIONNAME", fName: "fNAME", isEmpty: true, isExist: true, isFolder: false, extension: ".txt"},
                    {conditionName: "CONDITIONNAME2", fName: "fNAME2", isEmpty: true, isExist: true, isFolder: false, extension: ".txt"}
                ]
            }
        }
    }
</script>

<template>
    <div id="row h">
        <div v-for="singleCondition in listOfConditions">
            <h2>{{ singleCondition.conditionName }}</h2>
            <input
            type="checkbox"
            :value="singleCondition.isFolder"
            @input="singleCondition.isFolder = !singleCondition.isFolder">
            <label v-if="singleCondition.isFolder">Name of Folder</label>
            <label v-else>Name of File</label>
        </div>
    </div>
    <router-link to="/fileUpload" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Next</button>
    </router-link>
</template>