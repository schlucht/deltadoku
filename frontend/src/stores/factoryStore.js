import { reactive, readonly } from 'vue';
const factoryState = [];

const state = reactive({factoryState})

const getters = {}

const actions = {}

export default {
  state: readonly(state),
  ...getters,
  ...actions
}
