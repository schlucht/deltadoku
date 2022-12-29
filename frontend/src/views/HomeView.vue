<template>
  <div class="row ms-1">
    <div class="col-md-2 ots-gray vh-100">
<<<<<<< HEAD
      <h2 class="text-center">Betriebe</h2>
      <div class="list-group">
        <left-home :factories="state.Factories" />
      </div>
=======
      <FhxFileLoad />
      <button @click="load">Load</button>
>>>>>>> 51ae94f39f3e016666b700ebc7f6262d95690c49
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





function load() {
  axios("https://1234-schlucht-deltadoku-7pyrqhxe33k.ws-eu80.gitpod.io/users/login/", requestOptions, headers)
     .then((response) => response.json())
     .then((data) => {
       if (data.error) {
         console.log("Error: ", data.message)
       } else {
         consolelog(data)
       }
     })
}
</script>
