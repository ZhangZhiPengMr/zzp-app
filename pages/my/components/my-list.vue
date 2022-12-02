<template>
	<view class="flex bg-white shadow rounded">
		<view v-for="(item,index) in lists" :key="index"
			class="flex-1 flex flex-column align-center justify-center py-3" @click="tiaoZuan(item)">
			<view :class="item.icon" class="font-lg" style="font-size: 20px; color: rgb(254, 189, 0);"></view>
			<view class="font-sm mt-1 text-secondary">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			lists: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			//根据点击不同的跳转不同路由
			tiaoZuan(item) {
				if (item.page === "/pages/learn/learn") {
					this.navTab("/pages/learn/learn")
					return
				}
				if (item.page) {
					this.navTo(item.page, {
						login: item.login
					})
					return
				}
			}
		}
	}
</script>

<style>
</style>
