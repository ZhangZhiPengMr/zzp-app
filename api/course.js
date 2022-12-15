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

// 创建订单信息接口
const order = (data) => {
	return request({
		url: "/mobile/goods/read",
		method: "get",
		data
	})
}

// 创建订单信息接口
const count = (data) => {
	return request({
		url: "/mobile/user_coupon/count",
		method: "get",
		data
	})
}

export default {
	course,
	collect,
	unCollect,
	order,
	count
}
