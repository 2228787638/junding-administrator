import axios from 'axios'
import common from '../store/modules/common'

axios.defaults.baseURL = 'https://ygfygf.cn'
axios.defaults.headers.common['token'] = common.state.token
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
