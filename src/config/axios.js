import axios from 'axios'
import {commonStore} from '../store/modules/common'

axios.defaults.baseURL = 'http://ygfygf.cn'
axios.defaults.headers.common['token'] = commonStore.state.token
axios.defaults.timeout = 5000

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
  }
)

export default axios
