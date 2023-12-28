<template>
    <h2>Upload your files here as you would for your submission box.</h2>
    <input type="file" id="fileInput" accept=".txt, .zip" multiple><br><br>
    <label>Comments: </label><br>
    <textarea v-model="comments" placeholder="Put your comments here"></textarea><br><br>
    <button @click="uploadFile">Check my submission!</button><br><br>
    <div v-if="showResult === true">
        <displayResults :score="score" :warnErrList="warnErrList"/>
    </div>
</template>

<script>
import DisplayResults from '../components/DisplayResults.vue';
    export default{
        inject:{
            comments: Object,
            allConditions: Object
        },
        data(){
            return{
                showResult: false,
                comments: "",
                score: 70,
                warnErrList: [
                    {text: "This is a general statement!", warning: false, error: false},
                    {text: "This is what gets displayed if we are unsure of something!", warning: true, error: false},
                    {text: "This is a certified error!", warning: false, error: true}
                ]
            }
        },
        methods: {
            analyze(){
                this.showResult = !this.showResult
                let totalPass = 0
                this.score = totalPass/listConditions.length
                
            },
            uploadFile() {                
                // Get the input element
                var input = document.getElementById('fileInput');
                // Check if a file is selected
                if (input.files.length > 0) {
                    const reader = new FileReader()
                    
                    reader.addEventListener(
                        "load",
                        () => {
                        // this will then display a text file
                        //this.test = reader.result
                        this.showResult = true
                        },
                        false,
                    );

                    // Access the selected file
                    var file = input.files[0];
                    if(file){
                        reader.readAsText(file)
                        // Display file details
                        console.log('File name: ' + file.name);
                        console.log('File type: ' + file.type);
                        console.log('File size: ' + file.size + ' bytes');
                    }
                    
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