<template>
	<view>
		<view class="p-2">
			<i-item :item="item" :x="x"></i-item>
		</view>
		<view class="border-top-14">
			<view class="flex justify-between p-3 align-center border-bottom">
				<view class="font">
					优惠卷
				</view>
				<view>
					<text class="ml-auto font-sm">暂无可用</text>
					<text class="iconfont icon-jinru pl-2" style="color: rgb(187, 187, 187); font-size: 16px;"></text>
				</view>
			</view>
			<view class="flex justify-between p-3 align-center border-bottom">
				<view class="font">
					支付方式
				</view>
				<view class="ml-auto text-success">
					微信支付
				</view>
			</view>
		</view>
		<view style="height: 75px;"></view>
		<view class="fixed-bottom p-2 border-top bg-white">
			<view class="bg-main main-btn" @click="handleOrder">
				立即购买￥{{item.price}}
			</view>
		</view>
	</view>
</template>

<script>
	import course from "@/api/course.js"
	export default {
		data() {
			return {
				id: "",
				type: "",
				item: {},
				x: "flex",
			};
		},
		methods: {
			// 获取订单信息
			async getOrderInfo() {
				// 提示登录中
				uni.showLoading({
					title: "加载中",
					mask: true
				})
				try {
					const response = await course.order({
						id: this.id,
						type: this.type
					})
					this.item = response
					this.item.type = this.type
					console.log(response);
					uni.hideLoading()
				} catch (e) {
					uni.hideLoading()
					console.log(e);
					//TODO handle the exception
				}
			},
			// 购买
			async getCount() {
				// 提示登录中
				uni.showLoading({
					title: "加载中",
					mask: true
				})
				try {
					const response = await course.count({
						goods_id: this.id,
						type: this.type
					})
					console.log("goods=>", response);
					uni.hideLoading()
				} catch (e) {
					uni.hideLoading()
					console.log(e);
					//TODO handle the exception
				}
			},
			handleOrder(){
				alert("立即购买")
			}
		},
		onLoad(options) {
			this.id = options.id
			this.type = options.type
			this.getOrderInfo()
			this.getCount()
		}
	}
</script>

<style lang="scss">

</style>
