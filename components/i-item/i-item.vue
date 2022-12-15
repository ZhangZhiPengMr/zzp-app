<template>
	<view :class="x" @click="tiaozhuan(item)">
		<view class="img">
			<image :src="item.cover" mode=""></image>
			<view class="information">
				<text class="text-white font-sm ">{{information[item.type]}}</text>
			</view>
		</view>
		<view class="flex flex-column flex-shrink ml-2" :style="x?'width: 400rpx;':'width: 300rpx;'">
			<text class="text-ellipsis font-md">{{item.title}}</text>
			<view class="flex flex-1 align-end">
				<text v-if="item.price == '0.00'" class="font-md text-danger">免费</text>
				<text v-else class="font-md text-danger">￥{{item.price}}</text>
				<text v-if="item.t_price" class="font-sm text-light-muted">￥{{item.t_price}}</text>
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
			item: {
				type: Object,
				default: () => {}
			},
			x: {
				type: String,
				default: () => ""
			}
		},
		methods: {
			// 跳转详情页面
			tiaozhuan(item) {
				console.log(item);
				if (item.type === "column") {
					this.navTo("/pages/column/column?id=" + item.id)
				} else {
					this.navTo("/pages/course/course?id=" + item.id)
				}
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

		.information {
			position: absolute;
			right: 10rpx;
			bottom: 10rpx;
			background-color: rgba(0, 0, 0, .4);
			padding: 0 10rpx;
		}
	}
</style>
