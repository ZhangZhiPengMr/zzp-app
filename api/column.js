import request from "@/api/request.js"

// 课程详情接口
const column = (data) => {
	return request({
		url: "/mobile/column/read",
		method: "get",
		data
	})
}

// 课程详情中的收藏 
const columnCollect = (data) => {
	return request({
		url: "/mobile/collect",
		method: "post",
		data
	})
}

// 课程详情中的取消收藏 
const columnUnCollect = (data) => {
	return request({
		url: "/mobile/uncollect",
		method: "post",
		data
	})
}

export default {
	column,
	columnCollect,
	columnUnCollect
}
