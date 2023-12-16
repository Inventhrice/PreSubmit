<template>
    <router-link to="/conditions" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Start new process</button>
    </router-link>
</template>