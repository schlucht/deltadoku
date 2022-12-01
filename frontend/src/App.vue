<script setup lang="ts">
import OtsHeader from './components/OtsHeader.vue';
import OtsFooter from './components/OtsFooter.vue';
</script>

<template>
    <div>
        <ots-header></ots-header>
        <main>            
            <router-view />
        </main>        
        <ots-footer></ots-footer>
    </div>
</template>

<style lang="scss" scoped>
    div  {
        height: 100vh;
        display: grid;
        grid-template-rows: 10vh 1fr 10vh;
    }
    main {
        
    }
</style>
