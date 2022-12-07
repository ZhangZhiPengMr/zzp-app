import config from "@/config/index.js"

import store from "@/store/index.js"

const request = (options) => {

	const hastoken = store.getters.loginState || ""

	return new Promise((resolve, reject) => {

		uni.request({
			url: config.baseUrl + options.url,
			method: options.method || 'GET',
			header: {
				appid: "bd9d01ecc75dbbaaefce",
				token: store.state.userInfo.token || ""
			},
			data: options.data || {},
			success: (res) => {
				resolve(res.data.data)
				uni.hideLoading()
			},
			fail: (error) => {
				reject(error)
				console.log(error);
				uni.hideLoading()
			}
		})
	})
}

export default request
