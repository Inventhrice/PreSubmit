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
    //inject: [commentCondition, allConditions],
    data(){
        return{
            showResult: false,
            comments: "",
            score: 0,
            warnErrList: [],
            commentCondition: {conditionName: "Comments", isEmpty: true, contains: "C"},
            allConditions: [{conditionName: "File/Folder", fName: "test.txt", isFolder: false, isExist: false}]
        }
    },
    methods: {
        analyze(userFileArray){
            // {text: "This is a general statement!", warning: false, error: false}
            
            let totalPass = 0
            if(userFileArray.length != this.allConditions.length){
                warnErrList.push({text: "There are either too many or too little files provided.", warning: false, error: true})
            }
            else{
                if(this.commentCondition.isEmpty && this.comments == "") totalPass += 1;
                if(!this.commentCondition.isEmpty && this.comments == this.commentCondition.contains) totalPass += 1;
                /*
                for(let file in userFileArray){
                    let found = false
                    console.log(file.name)
                    for(let i = 0; !found && i < this.allConditions.length; i++)found = file.name == this.allConditions[i].fName
                    if(found) this.totalPass++
                } */
            }
            this.score = totalPass*100///(this.allConditions.length + 1)
            this.showResult = true
        },
        uploadFile() {                
            // Get the input element
            var input = document.getElementById('fileInput');
            //console.log(input.files)
            // Check if a file is selected
            if (input.files.length > 0) {
                this.analyze(input.files)
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