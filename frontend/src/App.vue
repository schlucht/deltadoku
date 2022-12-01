<script setup lang="ts">
import OtsHeader from './components/OtsHeader.vue';
import axio from 'axios'
import { ref } from 'vue'
    let hy = ref();

    const hello = async() => {
        const res = await axio("http://127.0.0.1:8080/api")
        const txt = await res.data
        console.log(txt)
        hy.value = txt
    }
    hello()
    console.log(hy)
</script>

<template>
    <div>
        <ots-header></ots-header>
        <router-view />
        <h2>{{ hy }}</h2>
    </div>
</template>

<style lang="scss" scoped>
</style>
