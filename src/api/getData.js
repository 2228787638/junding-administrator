import axios from '../config/axios'

/**
 * 登录
 * @param username 用户名
 * @param password 密码
 * @returns {*}
 */
export const login = (username, password) => axios.post('/login', {username, password})
/**
 * 获取当前用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getCurrentUser = () => axios.get('/getCurrentUser', {})

export const listUserInfos = () => axios.get('/users/', {})
