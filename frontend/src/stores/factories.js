import { reactive, readonly, computed } from 'vue'
import { AllFactories } from '../services/factory.service'

 const factories = AllFactories();


const state = reactive({factories})

const getters = {
  FactoriesName: computed(async () => {
    const name = await state.factories
    return await name.map(s => s["factory-name"])
  })
}

const actions = {


}


export default { state: readonly(state), ...actions, ...getters }