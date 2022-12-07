<template>
	<form class="login-form">
		<view v-for="(item,index) in fromList" :key="index" class="flex mt-5 position-relative">
			<text :class="item.icon" class="icon"></text>
			<input :placeholder="item.placeholder" :password="item.password" v-model="value[item.loginInfo]">
			<button v-if="item.button" class="send"
				@click="handleSend">{{codeDuration ? codeDuration + 's' : '发送'}}</button>
		</view>
		<i-button :btnTitle="btnTitle" @clickButton="clickButton"></i-button>
	</form>
</template>

<script>
	import userApi from "@/api/user.js"
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
				codeDuration: null,
				interval: null,
			}
		},
		methods: {
			// 绑定手机号按钮
			clickButton() {
				this.$emit("clickButton")
			},
			// 发送验证码按钮
			async handleSend() {
				try {
					const response = await userApi.getCode({
						phone: this.value.phone
					})
					this.$util.msg(response);
					console.log(response);
					this.codeDuration = 60
					this.interval = setInterval(() => {
						this.codeDuration--
						// 如果倒计时为0 
						if (this.codeDuration <= 0) {
							// 并且定时器是开启的状态
							if (this.interval) {
								// 清楚定时器
								clearInterval(this.interval)
								this.interval = null
							}
						}
					}, 1000)
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
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
		width: 100rpx !important;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}

	.send {
		width: 200rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		background-color: #5ccc84;
		border-radius: none;
		color: #fff;
		border-radius: 0 8rpx 8rpx 0;
		position: absolute;
		right: 0;
	}
</style>
