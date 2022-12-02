import { reactive, readonly } from 'vue'
import Factories  from '../models/factories'
import { Factory } from '../models/factory'




const state = reactive({
    factories: [] as Factory[]
})
const mutations = {
    loadFactories: (payload: Factory[]) => {   
           
        state.factories = payload
    }
} 
const actions = {
    getFactories:async () => {     
        const data = await Factories.getFactories()
        
        return mutations.loadFactories(data)        
    }          
}
const getters = {
    readAparates: ((title: string) => { 
        const appa = state.factories.find(f => f.name === title)?.apparats
        console.log("STORE APPA", appa)
        return appa
    })
}


export default {
    state: readonly(state), mutations, actions, getters
}