<template>
  <div>
    <input @change="loadFile($event)"
           type="file">
          <p>{{txt}}</p>
  </div>
</template>
<script setup>
import fhxService from '@/services/fhxService'
import { ref } from 'vue';

const txt = ref('')

const loadFile = (e) => {
  let file = e.target.files[0]
  const rf = new FileReader()
  rf.onload = () => {
    const s = rf.result
    txt.value = s
    fhxService(s)
  }
  rf.readAsText(file)
}

</script>

<style lang="scss">

</style>