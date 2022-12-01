export default {
	data() {
		return {

		}
	},
	methods: {
		//跳转路由
		navTo(url, options = {}) {

			if (!url) return
			if (options.login) {
				uni.navigateTo({
					url: '/pages/auth/login'
				})
				return
			}
			uni.navigateTo({
				url
			})
		},

		// 页面后退
		navBack(delta = 1) {
			uni.navigateBack({
				delta
			})
		},
	}
}
