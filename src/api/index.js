import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/front/login', params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchGet('/front/logout/' + params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchGet('/front/checkLogin', params)
}
// 首页数据
// export const homemsg = (params) => {
//   return http.fetchGet('/apis/cms/api/getColumnNewList?title=b', params)
// }
// 注册账号
export const regist = (params) => {
  return http.fetchPost('/front/regist', params)
}
// 上传图片
export const upload = (params) => {
  return http.fetchPost('/front/member/imgaeUpload', params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost('/front/member/updateheadimage', params)
}
// 推荐板块
export const recommend = (params) => {
  return http.fetchGet('/front/goods/recommend', params)
}
