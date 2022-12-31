<script setup>
import Card from '../components/card/card.vue';
import { inject, ref, onBeforeMount } from 'vue';
const factoryStore = inject('factoryStore')

const store = factoryStore

const { state } = store

const factories = ref(null)

onBeforeMount(async () => {
  factories.value = await state.factories
})

</script>
<template>
  <main>
    <div class="card-container">
      <Card v-for="factory in factories" :key="factory.id"></Card>
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