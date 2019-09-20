import axios from '../config/axios'

export const login = (username, password) => axios.post('/login', {username, password})
