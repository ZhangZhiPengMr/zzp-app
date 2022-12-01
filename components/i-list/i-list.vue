<template>
	<view class="list-box m-4">
		<view v-for="(item,index) in list" :key="index" class="list flex p-2 justify-between" @click="tiaoZhaun(item)">
			<view>
				<text v-if="item.icon" :class="item.icon"></text>
				<text class="title">{{item.title}}</text>
			</view>
			<view>
				<text v-if="item.text">{{item.text}}</text>
				<image v-if="item.src" :src="item.src" mode=""></image>
				<text v-if="item.rightIcon" :class="item.rightIcon"></text>
				<switch v-if="item.checked || item.checked === false" :checked="item.checked" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => ([{
						title: "我的优惠卷",
						page: "/pages/my/my-coupon",
						rightIcon: 'iconfont icon-tijiao',
						login: false
					},
					{
						title: "常见问题",
						page: "/pages/my/my-problem",
						rightIcon: 'iconfont icon-right',
						login: false
					},
					{
						title: "设置",
						page: "/pages/my/my-setup",
						rightIcon: 'iconfont icon-right',
						login: false
					}
				])
			}
		},
		data() {
			return {

			};
		},
		methods: {
			tiaoZhaun(item) {
				if (item.page) {
					this.navTo(item.page, {
						login: item.login
					})
					return
				}
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		background-color: #fafafa;
		.list {
			background-color: #fff;
			margin-bottom: 30rpx;
			border-bottom: 1px solid #efefef;
			color: #3e4244;
		}
	}
</style>
