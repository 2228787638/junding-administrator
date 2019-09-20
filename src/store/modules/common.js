import {login} from '../../api/authorization'

const state = {
  token: '',
  username: '',
  password: ''
}
const getters = {}
const actions = {
  async login ({commit}) {
    commit('setToken', await login())
  }
}
const mutations = {
  setUsernameAndPassword (state, username, password) {
    state.username = username
    state.password = password
  },
  setToken (state, token) {
    state.token = token
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
