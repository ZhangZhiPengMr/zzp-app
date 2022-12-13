<template>
	<view>
		<view class="img">
			<image :src="columnInfo.cover" mode=""></image>
			<view class="information">
				<text class="text-white font-sm">{{information.column}}</text>
			</view>
		</view>
		<!-- tab栏切换 -->
		<i-tab-bar v-model="activeIndex" :tabs="tabs"></i-tab-bar>
		<view class="animate__animated animate__fadeIn animate__faster" v-if="activeIndex === 0">
			<view class="flex flex-column p-3">
				<view class="mb-1 font-lg">
					{{columnInfo.title}}
				</view>
				<view class="flex align-center justify-between">
					<text class="font-sm text-light-muted">{{columnInfo.sub_count}}人学过</text>
					<text v-if="!columnInfo.isfava" class="iconfont icon-shoucang1" style="font-size: 50rpx;"
						@click="handleCollect"></text>
					<text v-else class="iconfont icon-shoucang1 text-main" style="font-size: 50rpx;"
						@click="handleUnCollect"></text>
				</view>
				<view class="flex mt-2 align-end">
					<text class="text-danger font-lg">￥{{columnInfo.price}}</text>
					<text class="font-sm text-light-muted ml-1 text-through">￥{{columnInfo.t_price}}</text>
				</view>
			</view>
			<view class="border-top-14">
				<view class="font-md py-2 px-3">
					课程简介
				</view>
				<view class="py-2 px-3">
					<rich-text :nodes="columnInfo.content"></rich-text>
				</view>
			</view>
		</view>
		<view class="">
			123
		</view>
	</view>
</template>

<script>
	import columnApi from "@/api/column.js"
	import information from "@/enum/information.js"
	export default {
		data() {
			return {
				information: information(),
				column: {
					id: '',
					column_id: 0,
					group_id: 0,
					flashsale_id: 0
				},
				columnInfo: {}, //详情的数据
				activeIndex: 0,
				tabs: [{
					id: '0',
					name: '简介',
				}, {
					id: '1',
					name: '目录',
				}]
			};
		},
		methods: {
			// 获取详情信息
			async getColumn() {
				try {
					const response = await columnApi.column(this.column)
					this.columnInfo = response
					if (response === "该记录不存在") {
						this.$util.msg(response)
						setTimeout(() => {
							this.navBack()
						}, 500)
					}
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			// 收藏
			async handleCollect() {
				try {
					// 消息加载
					uni.showLoading({
						title: "操作中...",
						mask: true
					})
					const response = await columnApi.columnCollect({
						goods_id: this.columnInfo.id,
						type: "column"
					})
					this.$util.msg("收藏成功")
					this.getColumn()
					uni.hideLoading()
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			},
			// // 取消收藏
			async handleUnCollect() {
				try {
					// 消息加载
					uni.showLoading({
						title: "操作中...",
						mask: true
					})
					const response = await columnApi.columnUnCollect({
						goods_id: this.columnInfo.id,
						type: "column"
					})
					this.$util.msg("取消收藏成功")
					this.getColumn()
					uni.hideLoading()
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			}
		},
		onLoad(options) {
			this.column.id = options.id
			this.getColumn()
		}
	}
</script>

<style lang="scss">
	.img {
		width: 100%;
		height: 420rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}

		.information {
			position: absolute;
			right: 20rpx;
			bottom: 10rpx;
			padding: 0 10rpx 10rpx 10rpx;
			background-color: rgba(0, 0, 0, 0.4);
		}
	}

	[alt] {
		max-width: 100%;
	}
</style>
