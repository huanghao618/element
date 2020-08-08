import fetch from "./fetch"

// 获取全部品类：/jd/getAllCates
export function getAllCates(params){
    return fetch({
     url:"/goods/getAllCates",
     method:"GET",
     params
    })
}
// 获取首页推荐商品：/jd/getHotGoodList
export function getHotGoodList(params){
    return fetch({
        url:"/goods/find",
        method:"GET",
        params

    })
}
// 删除商品:/jd/delGood
export function delGood(params){
    return fetch({
        url:"/goods/del",
        method:"GET",
        params
    })
}
// 添加商品:/jd/addGood
export function addGood(data){
    return fetch({
        url:"/goods/add",
        method:"POST",
        data
    })
}
// 注册：/user/regist
export function regist(data){
    return fetch({
        url:"/users/regiter",
        method:"POST",
        data

    })
}
// 登陆：/user/login
export function login(data){
    return fetch({
        url:"/users/login",
        method:"POST",
        data
    })
}
// 提交：/tijiao/ad
export function tijiao(data){
    return fetch({
        url:"/tijiao/ad",
        method:"POST",
        data
    })
}

export default{
    getAllCates,
    getHotGoodList,
    delGood,
    addGood,
    regist,
    login,
    tijiao
}