import request from "@/api/request.js"

//用户登录接口
const login = (data) => {
	return request({
		url: "/mobile/login",
		method: "post",
		data
	})
}

// 用户注册接口 
const register = (data) => {
	return request({
		url: "/mobile/reg",
		method: "post",
		data
	})
}

// 获取手机验证码接口
const getCode = (data) => {
	return request({
		url: "/mobile/get_captcha",
		method: "post",
		data
	})
}

// 退出登录接口 /mobile/logout
const logout = () => {
	return request({
		url: "/mobile/logout",
		method: "post"
	})
}

// 绑定手机号 /mobile/bind_mobile
const bindPhone = (data) => {
	return request({
		url: '/mobile/bind_mobile',
		method: "post",
		data
	})
}

export default {
	login,
	getCode,
	logout,
	register,
	bindPhone
}
