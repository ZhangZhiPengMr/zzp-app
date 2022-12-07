<template>
	<view class="p-3">
		<view v-if="userCouponList">
			<view v-for="(item,index) in userCouponList" :key="index" class="flex text-white mb-3">
				<view class="flex flex-column flex-1 bg-hover-warning p-2" style="border-right: 2px dashed #fff;">
					<text class="font-md">￥{{item.price}}</text>
					<text class="font-sm">适用{{information[item.type]}}：{{item.title}}</text>
				</view>
				<view class="flex align-center justify-center bg-warning" style="width: 200rpx;">
					立即使用
				</view>
			</view>
		</view>
		<view class="font text-muted" v-else>没有更多数据了</view>
	</view>
</template>

<script>
	import myApi from "@/api/my.js"
	import information from "@/enum/information.js"
	export default {
		data() {
			return {
				information: information(),
				couponInfo: {
					page: 1,
					limit: 10
				},
				userCouponList: "", // 我的优惠卷列表数据
			}
		},
		methods: {
			// 获取我的优惠卷数据
			async getUserCoupon() {
				try {
					const response = await myApi.userCoupon(this.couponInfo)
					console.log(response);
					this.userCouponList = response.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		},
		onLoad() {
			this.getUserCoupon()
		}
	}
</script>

<style>
</style>
