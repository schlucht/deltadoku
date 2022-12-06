<template>
  <div class="container-fluid bg-image" >
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

.bg-image::after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: '';
  background-image: url('@/assets/logos/Background-White.png');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10000;
  overflow: auto;
  opacity: 0.3;
  
}
</style>
