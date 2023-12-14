<script>
import HeaderButton from "./HeaderButton.vue"
let id = 0
    export default{
        data() {
            return {
                currActiveTab: 0,
                listTabs: [
                    {
                        id: id++,
                        tabName: 'Index',
                        tabLink: 'index.html'
                    },
                    {
                        id: id++,
                        tabName: 'Templates',
                        tabLink: 'templates.html'
                    },
                    {
                        id: id++,
                        tabName: 'Settings',
                        tabLink: 'settings.html'
                    },
                    {
                        id: id++,
                        tabName: 'About',
                        tabLink: 'about.html'
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
        <h1><a href="index.html">Pre-Submit</a></h1>
        <header class="d-flex justify-content-center">
            <ul class="nav nav-pills">
                <headerbutton v-for="tab in listTabs" :tabName="tab.tabName" :tabLink="tab.tabLink" :activeID="activeTab" :id="tab.id" />
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