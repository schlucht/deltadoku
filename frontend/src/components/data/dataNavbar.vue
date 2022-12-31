<script setup></script>
<template>
  <div class="data-nav">
    <ul>
      <li>
        <RouterLink active-class="active" to="/data/factory">Anlagen</RouterLink>
      </li>
      <li>
        <RouterLink active-class="active" to="/data/recipe">Rezepte</RouterLink>
      </li>
      <li>
        <RouterLink active-class="active" to="/data/unit">Unit Procedure</RouterLink>
      </li>
      <li>
        <RouterLink active-class="active" to="/data/admin">Admin</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style coped>
ul {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: .2rem;
}

li {
  background-color: var(--mid-blue);
  color: white;
  padding: .5rem 1rem;
}

li a {
  color: var(--white);
  font-size: 2.0rem;
}

li:hover a {
  color: var(--mid-blue-25);
}
</style>