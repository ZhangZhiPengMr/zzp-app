<template>
	<view>
		<uni-search-bar @hanbleSearch="hanbleSearch" @handleBack="handleBack"></uni-search-bar>
		<!-- 历史记录组件 -->
		<view v-if="history">
			<history :history="history" @handleItem="handleItem" @handleDelete="handleDelete"></history>
		</view>
	</view>
</template>

<script>
	import history from "./components/history.vue"
	export default {
		data() {
			return {
				history: ""
			};
		},
		methods: {
			//搜索事件
			hanbleSearch(val) {
				//进行本地存储
				const history = uni.getStorageSync("history") || []
				//判断搜索与历史记录有没有重复的
				const index = history.findIndex(item => item === val)
				if (index > -1) {
					history.splice(index, 1)
					history.unshift(val)
				} else {
					history.unshift(val)
				}
				uni.setStorageSync("history", history)
				this.navTo(`/pages/search-result/search-result?keyword=${val}`)
			},
			// 搜索框回填事件
			handleItem(item) {
				this.hanbleSearch(item)
			},
			// 清楚全部
			handleDelete() {
				// 提示
				uni.showModal({
					content: '是否要清除搜索记录？',
					success: async (res) => {
						if (res.confirm) {
							uni.removeStorageSync("history")
							this.getHistory()
						}
					},
				});
			},
			// 返回首页
			handleBack() {
				this.navTab(`/pages/index/index`)
			},
			// 获取本地的历史记录
			getHistory() {
				this.history = uni.getStorageSync("history")
			}
		},
		onLoad() {
			this.getHistory()
		},
		components: {
			history
		},
	}
</script>

<style lang="scss">

</style>
