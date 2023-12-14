var startCode = `<div id="row h">
<form>
`
var endCode = `
<button type="submit">Next</button>
</form>
</div>
`
function generateForm(){
    var code = `<label for="wordCount">Word Count: </label><input type="number" id="wordCount" name="wordCount" min="0" value="5"/><br>`
    return code
}

function compileCode(filename){
    if(filename == ""){
        var completeCode = startCode + generateForm() + endCode
        return completeCode
    }
    
}

document.getElementById('templateEditor').innerHTML = compileCode("")