<template>
  <div class="row ms-1">
    <div class="col-md-2 ots-gray vh-100">
      <FhxFileLoad />
      <button @click="load">Load</button>
    </div>
    <div class="col-md-10 vh-100">
      Mittelbereich
    </div>
  </div>
</template>

<script setup>
import FhxFileLoad from '@/components/FhxFileLoad.vue'
import axios from 'axios'
const paylod = {
  email: "web@jagolo.ch",
  passwod: "pwd",
}
const requestOptions = {
  method: "POST",
  body: JSON.stringify(paylod)
}
const headers = {
  'Access-Control-Allow-Origin': "*",
}

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
