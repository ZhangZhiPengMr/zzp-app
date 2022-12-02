<template>
	<view>
		<view class="page" @click="tiaoZuan">
			<view class="img">
				<image src="../../../static/logo.png" mode=""></image>
			</view>
			<view class="text ml-3">
				<view class="text-white font-md" v-if="!$store.getters.userName">立即登录</view>
				<view class="text-white font-md" v-if="$store.getters.userName">{{$store.getters.userName}}</view>
				<view class="text-white font-sm mt-0">登录解锁更多功能</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {

		data() {
			return {

			}
		},
		computed: {},
		methods: {
			tiaoZuan() {
				let token = this.$store.getters.loginState
				if (!token) {
					//跳转登录页面
					this.navTo('/pages/auth/login')
				}
				this.navTo("/pages/bind-phone/bind-phone")

			}
		}
	}
</script>
<style lang="scss">
	.page {
		padding: 30rpx;
		background-color: #40c470 !important;
		width: 100%;
		display: flex;
		box-sizing: border-box;
	}

	.img {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		background-color: #fff;

		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
</style>
