import {login} from '../../api/authorization'

export default {
  namespaced: true,
  state: {
    token: '',
    username: '',
    password: ''
  },
  actions: {
    async login ({commit}, ruleForm2) {
      const response = await login(ruleForm2.username, ruleForm2.password)
      const retCode = response.retCode
      if (retCode === 200) {
        const token = response.data
        commit('setToken', token)
        localStorage.setItem('token', token)
      }
      return retCode
    }
  },
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
}
