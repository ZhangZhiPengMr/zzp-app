import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {
	TOKEN_KEY,
	USER_NAME_KEY
} from "@/enum/user.js"

const store = new Vuex.Store({
	state: {
		// 用户登录之后token
		userToken: uni.getStorageSync(TOKEN_KEY) || "",
		// 用户信息
		userInfo: uni.getStorageSync(USER_NAME_KEY) || ""
	},
	getters: {
		// 登录的状态
		loginState(state) {
			return !!state.userToken
		}
	},
	mutations: {
		//登录成功存储token
		setToken(state, data) {
			if (data.token) {
				uni.setStorageSync(TOKEN_KEY, data.token)
			}
			if (data) {
				let obj = {
					username: data.username,
					phone: data.phone
				}
				uni.setStorageSync(USER_NAME_KEY, obj)
			}
		},
		// 退出登录
		logout(state) {
			// 清空用户信息&用户token和本地
			state.userInfo = ""
			state.userToken = ""
			uni.removeStorageSync(USER_NAME_KEY)
			uni.removeStorageSync(TOKEN_KEY)
		}
	},
	actions: {

	},
	modules: {

	}
})

export default store
