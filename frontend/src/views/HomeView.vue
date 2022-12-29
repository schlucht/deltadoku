<template>
  <div class="row ms-1">
    <div class="col-md-2 ots-gray vh-100">
      <h2 class="text-center">Betriebe</h2>
      <div class="list-group">
        <left-home :factories="state.Factories" />
      </div>
    </div>
    <div class="col-md-10 vh-100 pt-5 ps-2 row row-cols-md-2 row-cols-1 row-cols-lg-3 row-cols-xxl-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import LeftHome from '@/components/HomeComponents/LeftHome.vue'
import { inject } from 'vue';

const factoryStore = inject('factoryStore')
const { state, getFactories } = factoryStore

getFactories()




</script>
