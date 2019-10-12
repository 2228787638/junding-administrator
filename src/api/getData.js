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
/**
 * 获取用户列表（分页）
 * @param page 页数
 * @param size 页码大小
 * @returns {*}
 */
export const listUserInfos = (page, size) => axios.get('/users/', {params: {page: page, size: size}})
/**
 * 根据id删除user
 * @param id 用户id
 * @returns {*}
 */
export const deleteUserInfo = (id) => axios.delete(`/users/${id}`, {params: {id: id}})
/**
 * 根据id获取用户信息
 * @param id 用户id
 * @returns {*}
 */
export const getUserInfoById = (id) => axios.get(`/users/${id}`, {params: {id: id}})
