<template>
	<view class="page">
		<!-- 头部导航 -->
		<view class="my-top">
			<text>我的</text>
			<text>···</text>
		</view>
		<view class="dl-bg">
			<!-- 个人资料组件 -->
			<myPersonal></myPersonal>
			<view class="my-list">
				<!-- 我的列表组件 -->
				<myList :lists="lists"></myList>
			</view>
		</view>
		<!-- 优惠卷设置问题组件 -->
		<view class="mt-5">
			<i-list :list="list"></i-list>
		</view>
	</view>
</template>

<script>
	import myPersonal from "./components/personal.vue"
	import myList from "./components/my-list.vue"
	import lists from "@/config/my-list.js"
	import list from "@/config/i-list.js"
	export default {
		data() {
			return {
				lists: lists(),
				list: list()
			}
		},
		components: {
			myPersonal,
			myList
		},
		methods: {

		},
		onLoad() {
			console.log(this.lists);
		}
	}
</script>

<style lang="scss">
	.page {
		background-color: #fefefe;
	}

	.my-top {
		height: 44px;
		width: 100%;
		background: #40c470;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		font-size: 18px;
		padding: 0 24rpx;
		box-sizing: border-box;
	}

	.dl-bg {
		width: 100%;
		height: 300rpx;
		background-color: #40c470;
		border-radius: 0 0 40rpx 40rpx;
		position: relative;

		.my-list {
			position: absolute;
			bottom: -75rpx;
			left: 30rpx;
			width:690rpx;
			background-color: #fff;
			height: 150rpx;
			border-radius: 10rpx;
			box-shadow: 0px 0px 10rpx #dedede;
		}
	}

	.mt-5 {
		margin-top: 120rpx;
	}
</style>
