<script>
    export default{
        data(){
            return{
                conditions: [
                    {labelName: "Word Count", value: 0, inputType: "number", min: 0},
                    {labelName: "Page Count", value: 0, inputType: "number", min: 0},
                    {labelName: "Filename", value: '', inputType: "text"}
                ]
            }
        },
        methods:{
            pushCondition(name, value, inputType){
                conditions.push({labelName:name, value: value, inputType: inputType})
            }
        }
    }
</script>

<template>
    <div id="row h">
        <div v-for="condition in conditions">
            <label>{{ condition.labelName }}: 
                <input v-if="condition.inputType === 'number'" :type="condition.inputType" v-model="condition.value" :min="condition.min">
                <input v-else :type="condition.inputType" v-model="condition.value">
                
            </label><br>
        </div>
    </div>
    <router-link to="/fileUpload" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Next</button>
    </router-link>
</template>