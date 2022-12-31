<script setup>
import { RouterView } from 'vue-router'
import OtsFooter from './components/layouts/OtsFooter.vue';
import OtsHeader from './components/layouts/OtsHeader.vue';
</script>

<template>
  <div>
    <OtsHeader />
    <RouterView />
    <OtsFooter />
  </div>

</template>

<style scoped>
div {
  width: 100%;
}
</style>
