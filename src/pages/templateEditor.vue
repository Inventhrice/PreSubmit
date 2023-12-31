<script>
import { computed } from 'vue'
export default{
    data(){
        return{
            comments: {conditionName: "Comments", isEmpty: false, contains: ""},
            listOfConditions: [
                {conditionName: "File/Folder", fName: "test.txt", isFolder: false, isExist: false}
            ]
        }
    },
    provide(){
        return{
            allConditions: computed(() => this.listOfConditions),
            commentCondition: computed(() => this.comments)
        }
    },
    methods:{
        addCondition(){
            this.listOfConditions.push({conditionName: "File/Folder", fName: "", isFolder: false, isExist: false})
        }
    }
}
</script>

<template>
    <div id="row h">
        <h2>{{ comments.conditionName }}</h2>
        <input type="checkbox" :value="comments.isEmpty" @input="comments.isEmpty = !comments.isEmpty">
        <label>&nbsp;Check this box if the comments should be empty</label>
        <div v-if="!comments.isEmpty"><textarea v-model="comments.contains" placeholder="What should the comments say?"></textarea><br></div>

        <div v-for="singleCondition in listOfConditions">
            <br>
            <h2>{{ singleCondition.conditionName }}</h2>
            <input type="checkbox" :value="singleCondition.isFolder" @input="singleCondition.isFolder = !singleCondition.isFolder">
            <label>&nbsp;Name of the {{singleCondition.isFolder ? "Folder" : "File"}}:&nbsp;</label>
            <input v-if="singleCondition.isFolder" :value="singleCondition.fName" @input="singleCondition.fName = this.target.value" placeholder="Enter name of folder here">
            <input v-else :value="singleCondition.fName" @input="singleCondition.fName = this.target.value" placeholder="Enter name of file here">
            <br>
            <input type="checkbox" :value="singleCondition.isExist" @input="singleCondition.isExist = !singleCondition.isExist">
            <label>&nbsp;Check this box if the {{singleCondition.isFolder ? "folder" : "file"}} should exist</label>
        </div>
    </div>
    <router-link to="/fileUpload" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Next</button>
    </router-link>
</template>