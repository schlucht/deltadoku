import { reactive, readonly, computed } from 'vue'
import { AllFactories } from '../services/factory.service'


const state = reactive(
  {
    factories: [],
    loadError: {error: false, message:""},
    isLoaded: false,
  }
  )

const getters = {
  FactoriesName: computed(() => {
    const name = state.factories
    return name.map(s => s["factory-name"])
  })
}

const actions = {
  async LoadFactories() {
    try {
      console.log("Load Data")
      state.factories = []
        const allfact = await AllFactories()
        if (allfact.error) {
          state.loadError.error = allfact.error
          state.loadError.message = "Server not run!"
          return
        }
        let fact = null
        for (let key in allfact) {
          fact = {
            FactoryId: allfact[key].factoryId,
            FactoryName: allfact[key].factoryName
          }
          state.factories.push(fact)
        }
        isLoaded = true
    } catch (error) {
      console.error("Store Factory: ", error)
    }
  }

}


export default { state: readonly(state), ...actions, ...getters }