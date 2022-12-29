import { reactive, readonly } from 'vue';
import fs from '@/services/factoryService.js'


const state = reactive({
  Factories: [],
  error: null
})

const getters = {

}

const actions = {
  getFactories: async () => {
    try {
        const factories = await fs.getFactories()
        const data = await factories
        state.Factories = data
    } catch(err) {
      state.error = err
    }
  }
}

export default {
  state: readonly(state),
  ...getters,
  ...actions
}
