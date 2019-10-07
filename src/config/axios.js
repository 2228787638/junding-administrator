import axios from 'axios'
import { Message } from 'element-ui'
import Router from '../router'
import store from '../store'

axios.defaults.baseURL = 'http://ygfygf.cn'
// axios.defaults.headers.common['token'] = localStorage.getItem('token')
axios.defaults.timeout = 5000

axios.interceptors.response.use(
  response => {
    if (response.data.retCode === 501) {
      Message('登录信息失效，请重新登陆')
      Router.push('/login')
    }
    return response.data
  },
  error => {
    console.log(error)
  }
)
axios.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.state.common.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      console.log('没token')
      config.headers['token'] = localStorage.getItem('token')
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default axios
