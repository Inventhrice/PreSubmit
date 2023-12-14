<script>
import HeaderButton from "./HeaderButton.vue"
    export default{
        data() {
            return {
                currActiveTab: 0,
                listTabs: [
                    {
                        id: 0,
                        tabName: 'Index',
                        tabLink: 'index'
                    },
                    {
                        id: 1,
                        tabName: 'Templates',
                        tabLink: 'template'
                    },
                    {
                        id: 2,
                        tabName: 'Settings',
                        tabLink: 'settings'
                    },
                    {
                        id: 3,
                        tabName: 'About',
                        tabLink: 'about'
                    },
                ]
            }
        },
        components: {
            'headerbutton': HeaderButton
        },
        props: ['activeTab']
    }
</script>

<template>
<div class="row h">
    <div class="col">
        <h1><a :href="listTabs[0].tabLink">Pre-Submit</a></h1>
        <header class="d-flex justify-content-center">
            <ul class="nav nav-pills">
                <router-link class="nav-link" active-class="active" v-for="tab in listTabs" :to="tab.tabLink">{{ tab.tabName }}</router-link>
            </ul>
        </header>
    </div>
</div>

</template>

<style scoped>
h1{
    text-align: center;
}

</style>