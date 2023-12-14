<script>
    export default{
        data(){
            var startCode = `<div id="row h">
            <form>
            `
            var endCode = `
            <button type="submit">Next</button>
            </form>
            </div>
            `
        },
        methods:{
            generateForm(){
                var code = `<label for="wordCount">Word Count: </label><input type="number" id="wordCount" name="wordCount" min="0" value="5"/><br>`
                return code
            },

            compileCode(filename){
                if(filename == ""){
                    var completeCode = startCode + generateForm() + endCode
                    return completeCode
                }
                
            }
        }
    }
</script>