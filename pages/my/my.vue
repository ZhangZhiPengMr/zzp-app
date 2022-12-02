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
			<view class="my-list p-3">
				<!-- 我的列表组件 -->
				<myList :lists="lists"></myList>
			</view>
		</view>
		<!-- 优惠卷设置问题组件 -->
		<view class="mt-5 p-3">
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
		computed: {},
		methods: {

		},
		onLoad() {}
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
		border-radius: 0 0 55rpx 55rpx;
	}
</style>
