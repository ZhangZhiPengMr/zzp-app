import request from "@/api/request.js"

// 课程详情接口
const course = (data) => {
	return request({
		url: "/mobile/course/read",
		method: "get",
		data
	})
}

// 课程详情中的收藏 
const collect = (data) => {
	return request({
		url: "/mobile/collect",
		method: "post",
		data
	})
}

// 课程详情中的取消收藏 
const unCollect = (data) => {
	return request({
		url: "/mobile/uncollect",
		method: "post",
		data
	})
}

export default {
	course,
	collect,
	unCollect
}
