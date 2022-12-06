<template>
  <div>

        <input @change="loadFile($event)" type="file">

  </div>
</template>

<script setup>


  const loadFile = (e) => {
    let file = e.target.files[0]
    console.log(file)
    const rf = new FileReader()
    rf.readAsText(file)

    rf.onload = function() {
      console.log(rf.result)
    }
    
  }
    
</script>

<style>

</style>