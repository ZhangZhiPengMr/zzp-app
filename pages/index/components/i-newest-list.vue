<template>
	<view class="border-top-14">
		<view class="p-2">
			<view class="flex justify-between mb-3">
				<text class="font-md font-weight-bold">最新列表</text>
				<text class="font-sm text-light-muted">查看更多</text>
			</view>
			<view class="mt-4">
				<view v-for="(item,index) in newestList" :key="index" class="flex my-3">
					<view class="img">
						<image :src="item.cover" mode=""></image>
						<view class="information">
							<text class="text-white font-sm ">{{information[item.type]}}</text>
						</view>
					</view>
					<view class="flex flex-column flex-shrink ml-2" style="width: 400rpx;">
						<text class="text-ellipsis font-md">{{item.title}}</text>
						<view class="flex flex-1 align-end">
							<text class="font-md text-danger">￥{{item.price}}</text>
							<text class="font-sm text-light-muted">￥{{item.t_price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
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
			newestList: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">
	.img {
		width: 300rpx;
		height: 170rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}
		.information{
			position: absolute;
			right: 10rpx;
			bottom: 10rpx;
			background-color: rgba(0, 0, 0, .4);
			padding: 0 10rpx;
		}
	}
</style>
