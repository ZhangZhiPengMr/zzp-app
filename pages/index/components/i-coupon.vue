<template>
	<view class="p-2">
		<scroll-view scroll-x="true">
			<view class="scroll-row flex">
				<view v-for="(item,index) in couponData" :key="index" class="flex mr-3">
					<view class="coupon text-white">
						<text class="font-md">￥{{item.price}}</text>
						<text class="font-sm">{{item.isgetcoupon?"适用课程：":"适用专栏："}}{{item.value.title}}</text>
					</view>
					<view class="receive">
						领取
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			couponData: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style>
	.coupon {
		padding: 10px 15px;
		background-color: #d39e00;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-right: 2px dashed #fff;
	}

	.receive {
		width: 120rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffc107;
		font-size: 15px !important;
	}
</style>
