<template>
  <header class="container-fluid ots-blue d-flex align-items-center py-3">
    <img src="@/assets/logos/Arxada_WHITE.png"
         alt="Arxada Logo"
         class="img-fluid me-5"
         width="160">
    <ul class="nav nav-pills text-white">
      <li class="nav-item">
        <RouterLink class="nav-link text-white"
                    aria-current="page"
                    to="/">Übersicht</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-white"
                    to="/daten">Standard Daten</RouterLink>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white"
           href="#">Rezepte</a>
      </li>
    </ul>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>