<template>
    <div class="row h">
        <p>Results: {{ score }}</p>
        <b>What to watch out for!</b><br>
        <ul>
            <li v-for="exclaim in warnErrList">{{ exclaim.text }}</li>
        </ul>

    
    </div>
</template>

<script>
    export default{
        data(){
            return{
                score: 0,
                warnErrList: [
                    {text: "This is a general statement!", warning: false, error: false},
                    {text: "This is what gets displayed if we are unsure of something!", warning: true, error: false},
                    {text: "This is a certified error!", warning: false, error: true}
                ]
            }
        }
    }
</script>