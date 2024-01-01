<script>
import fileupload from "./fileUpload.vue"
export default{
    data(){
        return{
            comments: {conditionName: "Comments", isEmpty: false, contains: ""},
            listOfConditions: [
                {conditionName: "File/Folder", fName: "test.txt", isFolder: false, isExist: false}
            ],
            showFileUpload: false
        }
    },
    methods:{
        addCondition(){
            this.listOfConditions.push({conditionName: "File/Folder", fName: "" + this.listOfConditions.length, isFolder: false, isExist: false})
        },
        removeCondition(condition){
            this.listOfConditions = this.listOfConditions.filter((t) => t !== condition)
        }
    },
    components:{'FileUpload': fileupload}
}
</script>

<template>
    <div v-if="!showFileUpload" id="row h">
        <!-- Renders Comments -->
        <h2>{{ comments.conditionName }}</h2>
        <input type="checkbox" :value="comments.isEmpty" @input="comments.isEmpty = !comments.isEmpty">
        <label>&nbsp;Check this box if the comments should be empty</label>
        <div v-if="!comments.isEmpty"><textarea v-model="comments.contains" placeholder="What should the comments say?"></textarea><br></div>

        <!-- Displays if the list of conditions is empty -->
        <div v-if="listOfConditions.length === 0"><br><button @click="addCondition">Add condition</button><br></div>

        <!-- Iterates through all the list of conditions and renders -->
        <div v-for="singleCondition in listOfConditions">
            <br>
            <!-- Does three things: renders condition name; if its the last in list: have a plus button to add another condition, and have a minus button to remove condition -->
            <h2>{{ singleCondition.conditionName }} <button v-if="singleCondition === listOfConditions[listOfConditions.length-1]" class="btn btn-square-md" @click="addCondition">+</button>&nbsp;<button class="btn btn-square-md" @click="removeCondition(singleCondition)">-</button></h2>
            
            <!-- Changes between file and folder, and asks for name -->
            <input type="checkbox" :value="singleCondition.isFolder" @input="singleCondition.isFolder = !singleCondition.isFolder">
            <label>&nbsp;Name of the {{singleCondition.isFolder ? "Folder" : "File"}}:&nbsp;</label>
            <input v-if="singleCondition.isFolder" :value="singleCondition.fName" @input="singleCondition.fName = this.target.value" placeholder="Enter name of folder here">
            <input v-else :value="singleCondition.fName" @input="singleCondition.fName = this.target.value" placeholder="Enter name of file here">
            
            <br>
            
            <!-- Asking if the file/folder should exist -->
            <input type="checkbox" :value="singleCondition.isExist" @input="singleCondition.isExist = !singleCondition.isExist">
            <label>&nbsp;Check this box if the {{singleCondition.isFolder ? "folder" : "file"}} should exist</label>
        </div>
        <br>
        <button @click="showFileUpload = true">Next</button>
    </div>
    <div v-else id="row h">
        <button @click="showFileUpload = false">Back</button>
        <FileUpload :commentCondition="comments" :allConditions="listOfConditions" />
    </div>
    
</template>