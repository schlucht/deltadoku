<script setup></script>
<template>
  <footer>
    <div class="footer-card">
      <h4>Delta-V Rezepte und Parameter</h4>
      <p>
        Hier kommt ein Text in die Footer Card rein
      </p>
    </div>
    <div class="bottom">

    </div>
  </footer>
</template>
<style scoped>
footer {
  height: 25rem;
  background-color: var(--mid-blue);
  color: var(--white);
  display: flex;
  flex-direction: column;
  width: 100vw;
}

footer .footer-card {
  width: 40%;
  height: 60%;
  background-color: var(--white);
  color: var(--black);
  margin: 2rem 5rem;
  border-radius: .5rem;
  padding: .5rem 1.5rem;
}

footer .bottom {
  background-color: var(--mid-blue);
  width: 100%;
  border-top: 1px solid white;
  height: 5rem;

}

footer .bottom img {
  height: 12rem;
  width: 20rem;
}
</style>