<template>
	<view>
		<view class="img">
			<image :src="courseInfo.cover" mode=""></image>
			<view class="information">
				<text class="text-white font-sm">{{information[courseInfo.type]}}</text>
			</view>
		</view>
		<view class="animate__animated animate__fadeIn animate__faster">
			<view class="flex flex-column p-3">
				<view class="mb-1 font-lg">
					{{courseInfo.title}}
				</view>
				<view class="flex align-center justify-between">
					<text class="font-sm text-light-muted">{{courseInfo.sub_count}}人学过</text>
					<text v-if="!courseInfo.isfava" class="iconfont icon-shoucang1" style="font-size: 50rpx;" @click="handleCollect"></text>
					<text v-else class="iconfont icon-shoucang1 text-main" style="font-size: 50rpx;" @click="handleUnCollect"></text>
				</view>
				<view class="flex mt-2 align-end">
					<text class="text-danger font-lg">￥{{courseInfo.price}}</text>
					<text class="font-sm text-light-muted ml-1 text-through">￥{{courseInfo.t_price}}</text>
				</view>
			</view>
			<view class="border-top-14">
				<view class="font-md py-2 px-3">
					课程简介
				</view>
				<view class="py-2 px-3">
					<rich-text :nodes="courseInfo.try"></rich-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import courseApi from "@/api/course.js"
	import information from "@/enum/information.js"
	export default {
		data() {
			return {
				information: information(),
				course: {
					id: '',
					column_id: 0,
					group_id: 0,
					flashsale_id: 0
				},
				courseInfo: {}, //详情的数据
			};
		},
		methods: {
			// 获取详情信息
			async getCourse() {
				try {
					const response = await courseApi.course(this.course)
					this.courseInfo = response
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
					const response = await courseApi.collect({
						goods_id: this.courseInfo.id,
						type: "course"
					})
					this.$util.msg("收藏成功")
					this.getCourse()
					uni.hideLoading() 	
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			},
			// 取消收藏
			async handleUnCollect(){				
				try {
					// 消息加载
					uni.showLoading({
						title: "操作中...",
						mask: true
					})
					const response = await courseApi.unCollect({
						goods_id: this.courseInfo.id,
						type: "course"
					})
					this.$util.msg("取消收藏成功")
					this.getCourse()
					uni.hideLoading()
				} catch (e) {
					console.log(e);
					uni.hideLoading()
					//TODO handle the exception
				}
			}
		},
		onLoad(options) {
			this.course.id = options.id
			this.getCourse()
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
