<template>
    <div class="row h">
        <input type="file" id="fileInput" accept=".txt, .zip" multiple><br><br>
        <input type="text" id="comments"><br><br>
        <button onclick="uploadFile()">Check my submission</button><br>
    </div>
    <displayResults />
</template>

<script>
import DisplayResults from './components/DisplayResults.vue';
    export default{
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