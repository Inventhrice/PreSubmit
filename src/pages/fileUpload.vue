<template>
    <h2>Upload your files here as you would for your submission box.</h2>
    <input type="file" id="fileInput" accept=".txt, .zip" multiple><br><br>
    <label>Comments: </label><br>
    <textarea v-model="comments" placeholder="Put your comments here"></textarea><br><br>
    <button @click="analyze">Check my submission!</button><br><br>
    <div v-if="showResult === true">
        <displayResults :score="score"/>
    </div>
</template>

<script>
import DisplayResults from '../components/DisplayResults.vue';

function uploadFile() {                
    // Get the input element
    var input = document.getElementById('fileInput');
    // Check if a file is selected
    if (input.files.length > 0) {
        // Access the selected file
        var file = input.files[0];

        // Display file details
        console.log('File name: ' + file.name);
        console.log('File type: ' + file.type);
        console.log('File size: ' + file.size + ' bytes');
    } else {
        console.log('No file selected');
    }
}

    export default{
        data(){
            return{
                showResult: false,
                comments: "",
                score: 70
            }
        },
        methods: {
            analyze(event){
                this.showResult = !this.showResult
                let totalscore = 100
                this.score = totalscore - 10
                
            }
        },
        components:{
            "displayResults": DisplayResults
        }
    }
</script>