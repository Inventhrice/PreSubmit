<script>
    export default{
        data(){
            return{
                conditions: [
                    {id: 0, labelName: "Word Count:", value: 0, inputType: "number"},
                    {id: 1, labelName: "Page Count: ", value: 0, inputType: "number"} 
                ]
            }
        }
    }
    //
</script>

<template>
    <div id="row h">
        <div v-for="condition in conditions">
            <label>{{ condition.labelName }}: <input :type="condition.inputType" v-model="condition.value"></label><br>
        </div>
    </div>
</template>