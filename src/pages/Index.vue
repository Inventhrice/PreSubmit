<template>
    <p>Welcome to Pre-Submit!</p>
    <p>To start a new process, click the button below. The feature to import and use existing templates is yet to be implemented!</p>
    <router-link to="/process" v-slot="{href, navigate}">
        <button :href="href" @click="navigate">Start new process</button>
    </router-link>
</template>