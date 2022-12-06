<template>
  <div>
    <form>
        <input @change="laodFile" type="file" ref="file">
    </form>
  </div>
</template>

<script>
    function loadFile() {
        const formData = new FormData() 
        console.log(formData)
    }
</script>

<style>

</style>