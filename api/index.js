import request from "@/api/request.js"

// 请求首页数据
const index = () => {
	return request({
		url: "/mobile/index"
	})
}

//获取可用优惠券列表接口
const coupon = () => {
	return request({
		url: "/mobile/coupon"
	})
}

// 获取可用拼团列表
const group = (page = 1, usable = 1) => {
	return request({
		url: `/mobile/group?usable=${usable}`
	})
}

// 领取优惠卷接口
const receive = (data) => {
	return request({
		url: "/mobile/user_coupon/receive",
		method: "post",
		data
	})
}

export default {
	index,
	coupon,
	group,
	receive
}
