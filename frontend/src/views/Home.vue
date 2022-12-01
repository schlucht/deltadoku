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
                <li @click="getName($event.target as HTMLElement)" v-for="f in factorys">{{f.anlage.toUpperCase()}}</li>
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
                            <p>{{ap.description}}</p>
                        </div>
                        <div class="card__detail">
                            <em>Anzahl Standard UP:</em>
                            <span>23</span>
                        </div>
                        <div class="card__detail">
                            <em>Anzahl Spezial UP:</em>
                            <span>3</span>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import OtsFactoryLogo from '../logos/OtsFactoryLogo.vue';
import { Factory } from '../models/factory';
import { Apparat } from '../models/apparat';
import factoryService from '../services/factoryService';

let factorys = ref<Factory[]>([]);
let apparats = ref<Apparat[]>()

const allFactory = async() => {
    const response = await factoryService.getAll()
    const facData  = await response.data
    for (let fac of facData.anlagen) {
        factorys.value.push(fac as Factory)        
    }
   
}
allFactory()
const getName = (value: HTMLElement) => {
    const ap = factorys.value.find(f => f.anlage === value.innerText.toLowerCase())    
    apparats.value = ap?.apparats;
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


