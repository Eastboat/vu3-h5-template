import request from '@/utils/request'

export const getDataApi = (params?: any) =>
  request({ url: '/api/getData', method: 'get', params: params })

export const createUser = (data?: any) => request({ url: '/api/createUser', method: 'post', data })

export const userLogin = (data?: any) => request({ url: '/basic-api/login', method: 'post', data })
