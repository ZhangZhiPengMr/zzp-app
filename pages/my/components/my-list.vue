<template>
	<view class="flex justify-between mt-3">
		<view v-for="(item,index) in lists" :key="index" class="w-100 text-center" @click="tiaoZuan(item)">
			<view class="iconfont icon-OrderHistory font-lg"></view>
			<view class="mt-1">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			lists: {
				type: Array,
				default: () => [{
						title: "订单",
						page: "/pages/my/my-order",
						login: false
					},
					{
						title: "消息",
						page: "/pages/my/my-news",
						login: false
					},
					{
						title: "收藏",
						page: "/pages/my/my-collect",
						login: false
					},
					{
						title: "在学",
						page: "/pages/my/my-learning",
						login: false
					}
				]
			}
		},
		data() {
			return {

			}
		},
		methods: {
			//根据点击不同的跳转不同路由
			tiaoZuan(item){
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
