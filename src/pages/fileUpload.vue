<template>
    <h2>Upload your files here as you would for your submission box.</h2>
    <input type="file" id="fileInput" multiple><br><br>
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
    data(){
        return{
            showResult: false,
            comments: "",
            score: 0,
            warnErrList: []
        }
    },
    props:{
        commentCondition: Object,
        allConditions: Array
    },
    methods: {
        analyze(userFileArray){
            // {text: "This is a general statement!", warning: false, error: false}
            this.warnErrList = []
            let totalPass = 0
            if(userFileArray.length != this.allConditions.length)
                warnErrList.push({text: "There are either too many or too little files provided.", warning: false, error: true})
            
            else{
                if((this.commentCondition.isEmpty && this.comments == "") || (!this.commentCondition.isEmpty && this.comments == this.commentCondition.contains)) totalPass += 1;
                else this.warnErrList.push({text: "The comments do not match what is required.", warning: false, error: true})
                
                for(let i = 0; i < userFileArray.length; i++){
                    let file = userFileArray[i]
                    let found = false
                    
                    for(let j = 0; !found && j < this.allConditions.length; j++) 
                        if(file.name == this.allConditions[j].fName)
                            found = true
                    
                    if(found)
                        totalPass += 1
                    else 
                        this.warnErrList.push({text: ("File name " + file.name + " is not found in the conditions list."), warning: false, error: true})
                }
            }

            if(this.warnErrList.length == 0) this.warnErrList.push({text: "You are all good to submit!", warning: false, error: false})

            this.score = totalPass*100/(this.allConditions.length + 1)
            this.showResult = true
        },
        uploadFile() {                
            // Get the input element
            var input = document.getElementById('fileInput');
            if (input.files.length == 0) console.log('No file selected');
            this.analyze(input.files)
            
            // Check if a file is selected
            
            // This will be useful code in the future! But it mainly pertains to reading the contents of the file.
            /*
            const reader = new FileReader()
            
            
            reader.addEventListener(
                "load",
                () => {
                // this will then display a text file
                //this.test = reader.result
                console.log("Reader has loaded file!")
                },
                false,
            ); 

            // Access the selected file
            var file = input.files[0];
            if(file){
                reader.readAsText(file)
                // Display file details
                console.log('File name: ' + file.name);
            }
            */
        }
    },
    components:{
        "displayResults": DisplayResults
    }
}
</script>