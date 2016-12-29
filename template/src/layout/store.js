import * as types from '../constants.js'
import menu from './menu.js'
// initial state
// shape: [{ id, quantity }]
const state = {
  breadCrumb: menu[0].name,
  status: null
}

// getters
const getters = {
  [types.LAYOUT_GET_BREADCRUME]: state => state.breadCrumb
}

// actions
const actions = {
  [types.LAYOUT_SET_BREADCRUME] ({ commit, state }, breadCrumb) {
    commit(types.LAYOUT_SET_BREADCRUME, breadCrumb)
  }
}

// mutations
const mutations = {
  [types.LAYOUT_SET_BREADCRUME](state, breadCrumb){
    state.breadCrumb = breadCrumb
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
