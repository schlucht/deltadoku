<script setup>
import Card from '../components/card/card.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';

</script>
<template>
  <main>
    <div class="card-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </main>
</template>
<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .5rem;
  margin-top: 0.5rem;
  
}
</style>