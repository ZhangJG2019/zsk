import http from './public'
// 商品列表
export const getAllGoods = (params) => {
  return http.fetchGet('/front/goods/allGoods', params)
}

// 全选
export const editCheckAll = (params) => {
  return http.fetchPost('/front/member/editCheckAll', params)
}

// 获取用户地址
export const addressList = (params) => {
  return http.fetchPost('/front/member/addressList', params)
}
// 通过id获取地址
export const getAddress = (params) => {
  return http.fetchPost('/front/member/address', params)
}

// 添加收货地址
export const addressAdd = (params) => {
  return http.fetchPost('/front/member/addAddress', params)
}
// 删除收货地址
export const addressDel = (params) => {
  return http.fetchPost('/front/member/delAddress', params)
}
// 生成订单
export const submitOrder = (params) => {
  return http.fetchPost('/front/member/addOrder', params)
}
// 支付
export const payMent = (params) => {
  return http.fetchPost('/front/member/payOrder', params)
}
// 获取用户订单
export const orderList = (params) => {
  return http.fetchGet('/front/member/orderList', params)
}
// 获取单个订单详情
export const getOrderDet = (params) => {
  return http.fetchGet('/front/member/orderDetail', params)
}
// 取消订单
export const cancelOrder = (params) => {
  return http.fetchPost('/front/member/cancelOrder', params)
}
// 商品详情
export const productDet = (params) => {
  return http.fetchGet('/front/goods/productDet', params)
}
// 删除订单
export const delOrder = (params) => {
  return http.fetchGet('/front/member/delOrder', params)
}
// 商品列表
export const getSearch = (params) => {
  return http.fetchGet('/front/goods/search', params)
}
// 快速搜索
export const getQuickSearch = (params) => {
  return http.fetchGet('/front/goods/quickSearch', params)
}
