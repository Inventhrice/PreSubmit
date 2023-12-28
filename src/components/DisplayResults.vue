<template>
    <div class="row h">
        <h2>Results: {{ score }}/100</h2>
        <b>What to watch out for!</b><br>
        <ul>
            <li v-for="exclaim in warnErrList">
                <span v-if="exclaim.warning" style="color: yellow;">?</span>
                <span v-else-if="exclaim.error" style="color: red;">!</span>
                 {{ exclaim.text }}
            </li>
        </ul>

    
    </div>
</template>

<script>
    export default{
        props:{
            /*
            What WarnErrList should look like
                warnErrList: [
                    {text: "This is a general statement!", warning: false, error: false},
                    {text: "This is what gets displayed if we are unsure of something!", warning: true, error: false},
                    {text: "This is a certified error!", warning: false, error: true}
                ]
            */
            score: Number,
            warnErrList: Object
        }
    }
</script>