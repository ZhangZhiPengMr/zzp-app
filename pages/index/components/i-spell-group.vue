<template>
	<view class="border-top-14 mt-1">
		<view class="pl-2 pt-2 font-md font-weight-bold">
			拼团
		</view>
		<scroll-view scroll-x="true">
			<view class="scroll-row flex p-2">
				<view v-for="(item,index) in spellGroupData" :key="index" class="mr-2" style="width: 340rpx;">
					<view class="position-relative">
						<image :src="item.cover" mode="" style="width: 340rpx;height: 180rpx;"></image>
						<view class="information">
							<text class="text-white font-sm ">{{information[item.type]}}</text>
						</view>
					</view>

					<view class="flex flex-column flex-shrink">
						<text class="text-ellipsis font-md">{{item.title}}</text>
						<view>
							<text v-if="item.price == '0.00'" class="font-md text-danger">免费</text>
							<text v-else class="font-md text-danger">￥{{item.price}}</text>
							<text class="font-sm text-light-muted">￥{{item.t_price}}</text>
						</view>
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
			spellGroupData: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">
	.information {
		position: absolute;
		right: 10rpx;
		bottom: 20rpx;
		background-color: rgba(0, 0, 0, .4);
		padding: 0 10rpx;
	}
</style>
