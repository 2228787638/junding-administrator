import axios from 'axios'

axios.defaults.baseURL = 'http://ygfygf.cn'
axios.defaults.headers.common['token'] = localStorage.getItem('token')
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
