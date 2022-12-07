<template>
  <div>
    <input @change="loadFile($event)"
           type="file">
  </div>
</template>
<script setup>
import axios from 'axios'

const loadFile = (e) => {
  let file = e.target.files[0]
  console.log(file)
  const rf = new FileReader()
  rf.readAsText(file)

  rf.onload = async () => {
    console.log(rf.result)
    await axios.get("http://localhost:1234/api/up/files=" + rf.result)
  }
}

</script>

<style lang="scss">

</style>