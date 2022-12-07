<template>
	<view class="p-2">
		<scroll-view scroll-x="true">
			<view class="scroll-row flex">
				<view v-for="(item,index) in couponData" :key="index" class="flex mr-3">
					<view class="coupon text-white" :class="item.isgetcoupon?'resave':''">
						<text class="font-md">￥{{item.price}}</text>
						<text class="font-sm">适用{{information[item.type]}}：{{item.value.title}}</text>
					</view>
					<view class="receive" :class="item.isgetcoupon?'resave':''" @click="handleReceive(item)">
						{{item.isgetcoupon?"已领取":"领取"}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import information from "@/enum/information.js"
	export default {
		data() {
			return {
				information: information()
			}
		},
		props: {
			couponData: {
				type: Array,
				default: () => []
			}
		},
		methods:{
			// 领取优惠卷
			handleReceive(item){
				this.$emit("handleReceive",item)
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

	.resave {
		background-color: #dae0e5;
	}
</style>
