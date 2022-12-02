<template>
    <h1>{{ path }} + Wert</h1>
    <p>{{ path }}</p>
</template>
<script setup lang="ts">

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
    
    const path = ref(route.params.name)
    watch(
       () => route.fullPath, () => {
        path.value = route.params.name
       }

    )
</script>