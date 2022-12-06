import { reactive, readonly } from 'vue';

import { Factory } from '@/models/factories/Factory'

const factoryState: Factory[] = [];

const state = reactive({factoryState})

const getters = {}

const actions = {}

export default {
  state: readonly(state),
  ...getters,
  ...actions
}
