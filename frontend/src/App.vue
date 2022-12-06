<template>
  <div class="container-fluid">
    <header-layout />
    <router-view />
  </div>
</template>
<script setup>
import HeaderLayout from './layouts/HeaderLayout.vue';
</script>
<style lang="scss">
@import './styles/index.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
</style>
