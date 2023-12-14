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
    <Index v-if="tabIndex == 0" />
    <Templates v-else-if="tabIndex == 1" />
    <Settings v-else-if="tabIndex == 2" />
    <About v-else-if="tabIndex == 3" />
</template>