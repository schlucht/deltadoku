<script setup>
const probs = defineProps(
  ["message"]
)
</script>
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<style scoped>
p {
  color: red;
}
</style>