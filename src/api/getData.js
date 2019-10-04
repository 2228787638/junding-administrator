import axios from '../config/axios'

/**
 * 登录
 * @param username 用户名
 * @param password 密码
 * @returns {*}
 */
export const login = (username, password) => axios.post('/login', {username, password})
export const getCurrentUser = () => axios.get('/getCurrentUser', {})
