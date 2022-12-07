import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {
	USER_NAME_KEY
} from "@/enum/user.js"

const store = new Vuex.Store({
	state: {
		// 用户信息
		userInfo: uni.getStorageSync(USER_NAME_KEY) || ""
	},
	getters: {
		// 登录的状态
		loginState(state) {
			return !!state.userInfo.token
		}
	},
	mutations: {
		//登录成功存储用户信息
		setToken(state, data) {
			if (data) {
				uni.setStorageSync(USER_NAME_KEY, data)
			}
		},
		// 退出登录
		logout(state) {
			// 清空用户信息
			state.userInfo = ""
			uni.removeStorageSync(USER_NAME_KEY)
		}
	},
	actions: {

	},
	modules: {

	}
})

export default store
