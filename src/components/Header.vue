<script>
    export default{
        data() {
            return {
                listTabs: [
                    {
                        id: 0,
                        tabName: 'Index',
                        tabLink: '/'
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
                    }
                ]
            }
        }
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