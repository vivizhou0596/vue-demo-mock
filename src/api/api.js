import axios from 'axios'
let base = '';

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };