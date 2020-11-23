import request from '@/utils/request'

export function adminDetail() {
  return request({
    url: '/admin/adminDetail',
    method: 'POST',
    data: {}
  })
}
export function adminEdit(data) {
  return request({
    url: '/admin/adminEdit',
    method: 'POST',
    data: data
  })
}
export function getCourseList() {
  return request({
    url: '/course/getCourseList',
    method: 'POST',
    data: {}
  })
}
