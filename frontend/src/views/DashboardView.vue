<script setup>
import Card from '../components/card/card.vue';
import { inject, ref, onBeforeMount } from 'vue';
import OtsMessage from '../components/layouts/OtsMessage.vue';
const factoryStore = inject('factoryStore')

const store = factoryStore
const { state, LoadFactories } = store
const factories = ref(null)


onBeforeMount(() => {
  LoadFactories()
  factories.value = state.factories
})

</script>
<template>
  <main>
    <div class="card-container">
      <OtsMessage v-if="state.loadError.error" :message="state.loadError.message"></OtsMessage>
      <Card v-for="factory in factories" :key="factory.id" :name="factory.FactoryName"></Card>
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