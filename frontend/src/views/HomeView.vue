<template>
  <div class="row ms-1">
    <div class="col-md-2 ots-gray vh-100">
      <FhxFileLoad />
    </div>
    <div class="col-md-10 vh-100">
      Mittelbereich
    </div>
  </div>
</template>

<script setup>
import FhxFileLoad from '@/components/FhxFileLoad.vue'
const paylod = {
  email: "web@jagolo.ch",
  passwod: "pwd",
}
const requestOptions = {
  method: "POST",
  body: JSON.stringify(paylod)
}
fetch("https://schlucht-bookish-space-pancake-4qvxg6667p9cqgqv-1234.preview.app.github.dev/users/login", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      console.log("Error: ", data.message)
    } else {
      consolelog(data)
    }
  })
</script>
