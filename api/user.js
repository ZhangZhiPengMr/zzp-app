import request from "@/api/request.js"

//用户登录接口
const login = (data) => {
	return request({
		url:"/mobile/login",
		method: "post",
		data
	})
}

export default{
	login
}
