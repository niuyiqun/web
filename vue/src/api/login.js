import request from '@/utils/request'

export function webLogin(jsonForm) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data: jsonForm
  })
}



