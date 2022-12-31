<script setup>
import Card from '../components/card/card.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';

</script>
<template>
  <main>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </main>
</template>
<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  width: 70%;
  margin: 0 auto;
}

@media only screen and (max-width: 570px) {
  main {
    width: 100%;
  }
}
</style>