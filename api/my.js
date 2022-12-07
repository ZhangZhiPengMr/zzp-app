import request from "@/api/request.js"

// 我的优惠卷接口
const userCoupon = (data) => {
	return request({
		url: "/mobile/user_coupon",
		method: "get",
		data
	})
}

export default {
	userCoupon
}
