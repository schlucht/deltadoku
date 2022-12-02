import { reactive, readonly } from 'vue'
import Factories  from '../models/factories'
import { Factory } from '../models/factory'




const state = reactive({
    factories: [] as Factory[]
})
const mutations = {
    loadFactories: (payload: Factory[]) => {   
        console.log("STORE ", "MUTATIONS")     
        state.factories = payload
    }
} 
const actions = {
    getFactories:async () => {     
        const data = await Factories.getFactories()
        console.log("STORE ", data)
        return mutations.loadFactories(data)        
    }      
}


export default {
    state: readonly(state), mutations, actions
}