<script setup>
const props = defineProps(["name"])
</script>
<template>
  <div class="card">
    <RouterLink to="/">
      <h4>Unitproceduren von {{ name }}</h4>
    </RouterLink>
    <p>Rezepte und Standart UP in {{ name }}</p>
    <div class="card-body">
      <ul>
        <li>
          Standard UP: <span>212</span>
        </li>
        <li>
          Produkte UP: <span>5</span>
        </li>
        <li>
          Anzahl Produkte: <span>15</span>
        </li>
        <li>
          Anzahl Units: <span>10</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.card {
  min-width: 40rem;
  background-color: var(--white);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
}
</style>