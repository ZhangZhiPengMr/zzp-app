<template>
	<form class="login-form">
		<view v-for="(item,index) in fromList" :key="index" class="flex mt-5">
			<text :class="item.icon" class="icon"></text>
			<input :placeholder="item.placeholder" :password="item.password" v-model="value[item.loginInfo]">
			<button v-if="item.button" class="send" @click="handleSend">发送</button>
		</view>
		<i-button :btnTitle="btnTitle" @clickButton="clickButton"></i-button>
	</form>
</template>

<script>
	export default {
		props: {
			// v-model 绑定的值
			value: {
				type: Object,
				default: () => {}
			},
			// 表单需要的数据
			fromList: {
				type: Array,
				default: () => []
			},
			// 按钮数据
			btnTitle: String,
		},
		data() {
			return {

			}
		},
		methods: {
			// 绑定手机号按钮
			clickButton() {
				this.$emit("clickButton")
			},
			// 发送验证码按钮
			handleSend() {
				this.$emit("handleSend")
			}
		}
	}
</script>

<style>
	input {
		background-color: #f5f5f5;
		width: 630rpx;
		height: 100rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.icon {
		color: rgb(51, 51, 51);
		font-size: 16px;
		background-color: #f5f5f5;
		width: 100rpx;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}

	.send {
		width: 300rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		background-color: #5ccc84;
		border-radius: none;
		color: #fff;
		border-radius: 0 8rpx 8rpx 0;
	}
</style>
