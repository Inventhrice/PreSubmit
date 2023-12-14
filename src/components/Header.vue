<script>
import HeaderButton from "./HeaderButton.vue"
    export default{
        data() {
            return {
                listTabs: [
                    {
                        tabName: 'Index',
                        tabLink: 'index.html',
                        active: true
                    },
                    {
                        tabName: 'Templates',
                        tabLink: 'templates.html',
                        active: false
                    },
                    {
                        tabName: 'Settings',
                        tabLink: 'settings.html',
                        active: false
                    },
                    {
                        tabName: 'About',
                        tabLink: 'about.html',
                        active: false
                    },
                ]
            }
        },
        components: {
            'headerbutton': HeaderButton
        }
    }
</script>

<template>
<div class="row h">
    <div class="col">
        <h1><a href="index.html">Pre-Submit</a></h1>
        <header class="d-flex justify-content-center">
            <ul class="nav nav-pills">
                <headerbutton v-for="tab in listTabs" :tabName="tab.tabName" :tabLink="tab.tabLink" :active="tab.active" />
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