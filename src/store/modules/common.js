import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const commonStore = new Vuex.Store({

  state: {
    token: '',
    username: '',
    password: ''
  },
  actions: {},
  getters: {},
  mutations: {
    setUsernameAndPassword (state, username, password) {
      state.username = username
      state.password = password
    },
    setToken (state, token) {
      state.token = token
    }
  }
})
