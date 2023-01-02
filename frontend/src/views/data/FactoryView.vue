<script setup>
import FactoryForm from '../../components/data/factory/FactoryForm.vue';
import { inject, ref, onBeforeMount } from 'vue';
import OtsMessage from '../../components/layouts/OtsMessage.vue';
const factoryStore = inject('factoryStore')

const store = factoryStore
const { state, FactoriesName, LoadFactories, } = store

const names = ref(null)
const factories = ref(null)


onBeforeMount(() => {
  LoadFactories()
  names.value = FactoriesName.value
  factories.value = state.factories
})
</script>

<template>
  <div>
    <OtsMessage v-if="state.loadError.error" :message="state.loadError.message"></OtsMessage>
    <FactoryForm :factories="factories" v-if="!state.loadError.error"></FactoryForm>
  </div>
</template>
<style scoped>

</style>