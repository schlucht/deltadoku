<template>
    <section class="two-side">
        <div class="left">
            <div class="title">
                <div class="title__img">                    
                    <ots-factory-logo fill="white"/>
                </div>
                <h3>Anlagen</h3>
            </div>
            <ul>
                <li @click="getName($event.target as HTMLElement)" v-for="f in factories">{{f.name.toUpperCase()}}</li>
            </ul>
        </div>
        <div class="middle">
            <div class="container">
                <div class="card" v-for="ap in apparats">
                    <div class="title">
                        <h4>{{ap.name}}</h4>
                    </div>
                    <div class="card__body">
                        <div class="card__desc">
                            <p>{{ap.desc}}</p>
                        </div>
                        <div class="card__detail">
                            <em>Anzahl Standard UP:</em>
                            <span>{{ ap.ups.filter(u => !u.special).length }}</span>
                        </div>
                        <div class="card__detail">
                            <em>Anzahl Spezial UP:</em>
                            <span>{{ ap.ups.filter(u => u.special).length }}</span>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <button @click="newFact()">Click mich</button>
    </section>
</template>
<script setup lang="ts">
import { ref, inject, computed, onMounted } from 'vue'
import OtsFactoryLogo from '../logos/OtsFactoryLogo.vue';
import { Factory } from '../models/factory';
import { Apparat } from '../models/apparat';

const store = inject("store") as any

let factories = ref<Factory[]>([]);
let apparats = ref<Apparat[]>()
let specialCount = ref(0)
let standardCount = ref(0)

const newFact = () => {
    console.log(new Factory("Hallo"))
}

onMounted(async () => {
    await store.actions.getFactories()
    factories.value =  await store.state.factories
})





const getName = (value: HTMLElement) => {
    const ap = factories.value.find(f => f.name === value.innerText.toLowerCase())    
    const appa = ap?.apparats as Apparat[]
    apparats.value = appa   
    
}

</script>

<style lang="scss" scoped>
@import '../styles';
    .left {
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center; 
        border-right: 1px solid gray;  
        ul {
            
            list-style: none;
            width: 95%;
            font-size: calc($font-size * 2);
            li {
                padding: .5rem .5rem;
                margin: 1rem 0;
                background-color: $col-white;
                cursor: pointer;
                &:first-child {
                    margin-top: 0.01rem;
                }
            }

        }   
    }
    
</style>


