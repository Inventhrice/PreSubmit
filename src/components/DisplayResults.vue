<template>
    <div class="row h">
        <h2>Results: {{ score }}/100</h2>
        <b>What to watch out for!</b><br>
        <ul>
            <li v-for="exclaim in warnErrList">
                <span v-if="exclaim.warning" class="warningResult">?</span>
                <span v-else-if="exclaim.error" class="errorResult">! {{ exclaim.text }}</span>
                 {{ exclaim.text }}
            </li>
        </ul>

    
    </div>
</template>

<script>
    export default{
        data(){
            return{
                warnErrList: [
                    {text: "This is a general statement!", warning: false, error: false},
                    {text: "This is what gets displayed if we are unsure of something!", warning: true, error: false},
                    {text: "This is a certified error!", warning: false, error: true}
                ]
            }
        },
        props:{
            score: Number
        }
    }
</script>

<style>
#warningResult {
    color: darkturquoise;
}

#errorResult{
    color: darkturquoise;
}
</style>