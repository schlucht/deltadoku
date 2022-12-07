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
import fs from '@/services/factoryService.js'

const f = fs.getFactories()
.then((d) => console.log(d));

</script>
