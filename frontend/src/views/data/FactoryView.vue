<script setup>
import FactoryForm from '../../components/data/factory/FactoryForm.vue';
import { inject, ref, onBeforeMount } from 'vue';
const factoryStore = inject('factoryStore')

const store = factoryStore

const { state, FactoriesName } = store
console.log(FactoriesName.value)
const factories = ref(null)
const names = ref(null)
onBeforeMount(async () => {
  factories.value = await state.factories
  names.value = await FactoriesName.value
})
</script>
<template>
  <div>
    <FactoryForm :factories="factories"></FactoryForm>
  </div>
</template>
<style scoped>

</style>