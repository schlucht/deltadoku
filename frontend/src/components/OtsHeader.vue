<template>
    <header>
        <div class="logo">
            <img src="../assets/logos/Arxada_WHITE.png" alt="Arxada Logo">
        </div>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Startseite</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Produkte</RouterLink>
                </li>
                <li>
                    <RouterLink to="/daten">Daten</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Impressum</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
@import "../styles";
    header {
        background-color: $col-blue;
        padding: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    header .logo img {
        height: 5rem;
        width: 15rem;
        display: block;
    }

    header nav ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 5rem;
        list-style: none;
        padding-bottom: 0.5rem;
    }

    header nav ul a {
        color: $col-white;
        font-size: calc($font-size) * 1.3;
    }

    header .search {
        display: grid;
        grid-template-columns: 1fr 3.6rem;
    }

    header .search input {
        padding: 0.5rem;
    }

    header .search button {
        height: 3.6rem;
        width: 3.6rem;
    }

    header .search button img {
        height: 100%;
        width: auto;
        cursor: pointer;
    }
</style>