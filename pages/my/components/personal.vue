<template>
	<view>
		<view class="page" @click="tiaoZuan">
			<view class="img">
				<image :src="userInfo.avatar" mode=""></image>
			</view>
			<view class="text ml-3 flex-1">
				<view class="text-white font-md" v-if="!userInfo">立即登录</view>
				<view class="text-white font-md" v-if="userInfo">{{userInfo.nickname || userInfo.username}}</view>
				<view class="text-white font-sm mt-0" v-if="!userInfo">登录解锁更多功能</view>
				<view class="text-white font-sm mt-0" v-if="userInfo">暂无描述</view>
			</view>
			<text class="iconfont icon-ico code mt-5" style="color: #fff;" v-if="userInfo"></text>
		</view>
	</view>
</template>
<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {}
		},
		computed: {
			...mapState(["userInfo"])
		},
		methods: {
			tiaoZuan() {
				let token = this.$store.getters.loginState
				if (!token) {
					//跳转登录页面
					this.navTo('/pages/auth/login')
					return
				}
				// 判断是否有手机号
				let userInfo = this.$store.state.userInfo
				if (!userInfo.phone) {
					this.navTo("/pages/bind-phone/bind-phone")
					return
				}

				// 有token和手机号的情况下跳转到个人资料页面
				this.navTo("/pages/user-info/user-info")
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
		justify-content: space-between;
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

	.code {}
</style>
