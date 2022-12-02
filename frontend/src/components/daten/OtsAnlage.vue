<template>
    <div class="anlage">
        <div class="anlage_title" >
            <span class="title">
                <RouterLink :to='{name:"Anlage", params: {title: factory?.name}}'>{{ factory?.name.toUpperCase() }}</RouterLink>
            </span>
            <span class="minus">-</span>
        </div>           
        <div class="anlagen__controls">
            <div class="anlage__control">
                <label for="factoryNew"></label>
                <input type="text" name="factoryNew" id="factoryNew">
            </div>
            <div class="anlage__control">
                <button class="btn">Speichern</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { Factory } from '../../models/factory';

defineProps({
    factory: Factory
})   
    
</script>

<style lang="scss">

</style>