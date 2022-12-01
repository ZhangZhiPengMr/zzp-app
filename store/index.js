import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import {
	TOKEN_KEY
} from "@/enum/user.js"

const store = new Vuex.Store({
	state: {
		// 用户登录之后token
		accessToken: uni.getStorageSync(TOKEN_KEY) || ""
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {

	}
})

export default store
