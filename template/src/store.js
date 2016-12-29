import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout/store'
import * as types from './constants.js'
import config from './config'

Vue.use(Vuex)

const state = {
  username: ''
}

// getters
const getters = {
  [types.GLOBAL_GET_USERNAME]: state => state.username
}

// actions
const actions = {
  [types.GLOBAL_SET_USERNAME] ({ commit, state }, username) {
    commit(types.GLOBAL_SET_USERNAME, username)
  },
  [types.GLOBAL_CALL_DETAIL]({ commit, state }){
    setTimeout(() => {
      commit(types.GLOBAL_SET_USERNAME, 'admin')
    },600)
  }
}

// mutations
const mutations = {
  [types.GLOBAL_SET_USERNAME](state, username){
    state.username = username
  },
  [types.GLOBAL_RESET_USERNAME](state, username){
    state.username = ''
  }
}

const Store = new Vuex.Store({
  state,
  modules: {
    layout,
  },
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})

export default Store
