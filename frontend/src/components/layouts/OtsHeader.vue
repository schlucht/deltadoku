<template>
  <header>
    <div class="top-nav"> </div>
    <nav>
      <div class="logo">
        <img src="@/assets/logos/Arxada_BLUE.png" alt="Arxada Logo">
      </div>
      <div class="menu">
        <router-link active-class="active" to="/">
          <HomeIcon hover="rgba(79, 140, 236, .75)" size="24"></HomeIcon>
        </router-link>
        <RouterLink active-class="active" to="/">Dashboard</RouterLink>
        <RouterLink active-class="active" to="/recipe">Rezepte</RouterLink>
        <RouterLink active-class="active" to="/data">Daten</RouterLink>
        <RouterLink active-class="active" to="/help">Hilfe</RouterLink>
      </div>
    </nav>
  </header>
</template>
<script setup>
import HomeIcon from '../icons/HomeIcon.vue';
</script>
<style scoped>
header {
  position: relative;
  background-color: var(--white);
  color: var(--clr-font);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}



.top-nav {
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10rem;
  background-color: var(--mid-blue);
  color: var(--white);
}

.logo img {
  height: 7rem;
  width: 18rem;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
}

nav .menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

header nav a {
  color: var(--clr-font);
  line-height: 2rem;
  text-decoration: none;
}

header nav a:hover {
  color: var(--mid-blue);
  line-height: 2rem;
}

.active {
  color: var(--mid-blue);
}

header nav span {
  color: var(--clr-font)
}

@media only screen and (max-width: 570px) {
  header nav {
    flex-direction: column;
    gap: 0 3rem
  }
}
</style>