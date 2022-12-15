<template>
	<view>
		<view class="border-top-14 bortop" v-for="(item,index) in orderList" :key="index">
			123
		</view>
		<view class="border-top-14 font text-center p-2" style="color: rgb(119, 119, 119);">
			没有更多数据了
		</view>
	</view>
</template>

<script>
	import myApi from "@/api/my.js"
	export default {
		data() {
			return {
				page: 1,
				limit: 5,
				orderList:[]
			}
		},
		methods: {
			// 获取我的订单
			async getOrderList() {
				try {
					const response = await myApi.order({
						page: this.page,
						limit: this.limit
					})
					console.log(response);
					this.orderList = response.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		},
		onLoad() {
			this.getOrderList()
		}
	}
</script>

<style lang="scss">
	.bortop:first-child{
		border: none;
	}
</style>
