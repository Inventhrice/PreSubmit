<template>
    <h2>Upload your files here as you would for your submission box.</h2>
    <input type="file" id="fileInput" accept=".txt, .zip" multiple><br><br>
    <label>Comments: </label><br>
    <textarea v-model="comments" placeholder="Put your comments here"></textarea><br><br>
    <button @click="showResult = !showResult">Check my submission!</button><br><br>
    <div v-if="this.showResult === true">
        <displayResults :score="40"/>
    </div>
</template>

<script>
import DisplayResults from '../components/DisplayResults.vue';
    export default{
        data(){
            return{
                showResult: false,
                comments: ""
            }
        },
        methods: {
            uploadFile() {
                
                // Get the input element
                var input = document.getElementById('fileInput');
                var comments = document.getElementById('comments');
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
        },
        components:{
            "displayResults": DisplayResults
        }
    }
</script>