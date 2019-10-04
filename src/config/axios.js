import axios from 'axios'
import { Message } from 'element-ui'
import Router from '../router'

axios.defaults.baseURL = 'http://ygfygf.cn'
axios.defaults.headers.common['token'] = localStorage.getItem('token')
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

export default axios
