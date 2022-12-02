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
		// 用户名称
		userName: uni.getStorageSync(USER_NAME_KEY) || ""
	},
	getters: {
		// 登录的状态
		loginState(state) {
			return !!state.userToken
		},
		// 用户名称
		userName(state) {
			return state.userName
		}
	},
	mutations: {
		setToken(state, data) {
			if (data.token) {
				uni.setStorageSync(TOKEN_KEY, data.token)
			}
			if (data.username) {
				uni.setStorageSync(USER_NAME_KEY, data.username)
			}
		}
	},
	actions: {

	},
	modules: {

	}
})

export default store
