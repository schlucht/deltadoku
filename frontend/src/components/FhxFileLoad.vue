<template>
  <div>
    <input @change="loadFile($event)"
           type="file">
    <p>{{ txt }}</p>
  </div>
</template>
<script setup>
import { getUpData } from '@/services/fhxService'
import { ref } from 'vue';

const txt = ref('')

const loadFile = (e) => {
  let file = e.target.files[0]
  const rf = new FileReader()
  rf.onload = () => {

    const s = rf.result
    getUpData(s).then(
      d => txt.value = d
    )
  }

  rf.readAsBinaryString(file)
}

</script>

<style lang="scss">

</style>