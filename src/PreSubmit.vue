<script>
    export default{
        data(){
            return{
                tabIndex: 0
            }
        }
    }
</script>

<template>
    <PSHeader :activeTab="0" />
    <router-view></router-view>
</template>