<template>
	<view class="noLogin">
		<image src="@/static/noLogin.png" mode=""></image>
		<view class="text-muted my-2 font">登录后才可以查看我的学习哦</view>
		<button class="btn" @click="navTo('/pages/auth/login')">立即登录</button>
	</view>
</template>

<script>

</script>

<style lang="scss">
	.noLogin {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		image {
			width: 350rpx;
			height: 350rpx;
		}

		.btn {
			color: #353535;
			border: 1px solid #353535;
			background-color: rgba(0, 0, 0, 0);
			display: inline-block;
			line-height: 2.3;
			font-size: 26rpx;
			padding: 0 1.34em;
		}
	}
</style>