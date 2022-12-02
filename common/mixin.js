export default {
	data() {
		return {

		}
	},
	methods: {
		//跳转路由
		navTo(url, options = {}) {
			// 没传路由的情况
			if (!url) return
			// 判断传过来的状态是不是需要登录能进才能进的
			if (options.login && !this.$store.getters.loginState) {
				uni.navigateTo({
					url: '/pages/auth/login'
				})
				return
			}
			let userInfo = this.$store.state.userInfo
			if (options.login && !this.$store.getters.hasLogin && !userInfo.phone) {
				uni.navigateTo({
					url: '/pages/bind-phone/bind-phone'
				})
				return
			}
			// 跳转路由
			uni.navigateTo({
				url
			})
		},
		//跳转到tabber页面
		navTab(url) {
			uni.switchTab({
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
