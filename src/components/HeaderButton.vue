<script>
    export default{
        props: ['tabName', 'tabLink', 'active']
    }
</script>

<template>
    <li v-if="active === true" class="nav-item"><a :href="tabLink" class="nav-link active" aria-current="page">{{ tabName }}</a><br></li>
    <li v-else class="nav-item"><a :href="tabLink" class="nav-link">{{ tabName }}</a><br></li>
</template>