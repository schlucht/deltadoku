<template>
    <section class="container">        
        <div class="anlagen">
            <ots-anlage v-for="fact in factories" :factory="fact"></ots-anlage>                
        </div>
        <div>
            <router-view />
        </div>
    </section>
</template>
<script setup lang="ts">
import OtsAnlage from '../components/daten/OtsAnlage.vue'

import { ref, inject,  onMounted } from 'vue'

import { Factory } from '../models/factory';
import { Apparat } from '../models/apparat';

const store = inject("store") as any

let factories = ref<Factory[]>([]);
let apparats = ref<Apparat[]>()

onMounted(async () => {
    await store.actions.getFactories()
    factories.value =  await store.state.factories
})

   
</script>
<style lang="scss">
    @import '../styles';

    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .anlagen {
        background-color: red;
        display: flex;
        justify-content: space-between;
        width: 90%;
    }

</style>