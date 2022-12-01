import App from './App'
//引入mixin混入
import mixin from "@/common/mixin.js"
Vue.mixin(mixin)

// 引入vuex
import store from "@/store/index.js"


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
