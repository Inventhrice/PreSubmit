<script>
import listTemplates from "../components/listTemplates.vue"
export default{
    components:{
        'listTemplates': listTemplates
    }
}
</script>

<template>
    <h1>Templates</h1>
    <p>Use an existing template of conditions (TBD)</p>
    <router-link to="/conditions" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Start with a new template</button><br><br>
    </router-link>
    <p> This feature will be implemented at a later release!</p>
</template>