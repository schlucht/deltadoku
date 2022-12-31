<script setup>
import DataNavbar from '../../components/data/dataNavbar.vue';

</script>
<template>
  <DataNavbar></DataNavbar>
  <div>
    <RouterView></RouterView>
  </div>
</template>
<style scoped>
div {
  display: flex;
  align-items: center;
  background-color: var(--white);
  width: 60%;
  margin: 0 auto;
}

@media only screen and (max-width: 400px) {
  div {
    width: 85%;
  }
}
</style>