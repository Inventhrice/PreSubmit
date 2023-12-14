<script>
    export default{
        props: ['activeID', 'id', 'tabName', 'tabLink']
    }
</script>

<template>
    <li v-if="id === activeID" class="nav-item"><a :href="tabLink" class="nav-link active" aria-current="page">{{ tabName }}</a><br></li>
    <li v-else class="nav-item"><a :href="tabLink" class="nav-link">{{ tabName }}</a><br></li>
</template>