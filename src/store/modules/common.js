import {getCurrentUser, login} from '../../api/getData'

export default {
  namespaced: true,
  state: {
    token: '',
    username: '',
    role: ''
  },
  actions: {
    async login ({commit}, ruleForm2) {
      const response = await login(ruleForm2.username, ruleForm2.password)
      if (response.retCode === 200) {
        const token = response.data
        commit('setToken', token)
        localStorage.setItem('token', token)
        return response.retCode
      }
    },
    async getCurrentUser ({commit}) {
      const response = await getCurrentUser()
      const responseData = response.data
      if (response.retCode === 200) {
        commit('setCurrentUserInfo', responseData.username, responseData.role)
      }
    }
  },
  getters: {},
  mutations: {
    setCurrentUserInfo (state, username, role) {
      state.username = username
      state.role = role
    },
    setToken (state, token) {
      state.token = token
    },
    loginOut (state) {
      state.token = ''
      localStorage.setItem('token', '')
    }
  }
}
