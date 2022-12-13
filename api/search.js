import request from "@/api/request.js"

// 搜索接口请求
const searchApi = (data) => {
	return request({
		url: "/mobile/search",
		method: "get",
		data
	})
}


export default {
	searchApi
}
