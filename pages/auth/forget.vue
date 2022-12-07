<template>
	<view class="page">
		<text class="text-white m-1 iconfont icon-fanhui" @click="back"></text>
		<view class="content">
			<view class="con">
				<view class="h3">
					找回密码
				</view>
				<!-- 表单组件 -->
				<i-form @clickButton="clickButton" v-model="loginInfo" :fromList="fromList" :btnTitle="btnTitle">
				</i-form>
			</view>
		</view>
	</view>
</template>

<script>
	import userApi from "@/api/user.js"
	export default {
		data() {
			return {
				loginInfo: {
					phone: "",
					code: "",
					password: "", //密码
					repassword: "" //确认密码
				},
				btnTitle: '立即找回',
				// form组件需要的
				fromList: [{
					placeholder: "请输入手机号",
					loginInfo: "phone",
					icon: "iconfont icon-wode"
				}, {
					placeholder: "验证码",
					loginInfo: "code",
					icon: "iconfont icon-suoding_huaban",
					button: true
				}, {
					placeholder: "请输入新密码",
					loginInfo: "password",
					icon: "iconfont icon-suoding_huaban"
				}, {
					placeholder: "请输入确认新密码",
					loginInfo: "repassword",
					icon: "iconfont icon-suoding_huaban"
				}]
			}
		},
		methods: {
			// 返回上一步
			back() {
				this.navTo("/pages/auth/login")
			},
			//立即找回
			async clickButton() {
				//消息提示
				uni.showLoading({
					title: "加栽中",
					mask: true
				})
				try {
					const response = await userApi.forget(this.loginInfo)
					if (response == "ok") {
						this.$util.msg("更改成功")
						//更改密码成功后返回登录页面
						this.back()
					} else {
						this.$util.msg(response)
					}
					uni.hideLoading()
				} catch (e) {
					//TODO handle the exception
					uni.hideLoading()
					console.log(e);
				}
			},
		}
	}
</script>

<style lang="scss">
	.icon-fanhui:before {
		font-size: 30px;
	}

	.page {
		width: 100%;
		height: 200px;
		background: linear-gradient(to right, #84f6b6, #8ed6ef);
	}

	.content {
		position: absolute;
		top: 174rpx;
		width: 100%;
		background-color: #fff;
		height: 500rpx;
		border-radius: 30rpx;

		.con {
			box-sizing: border-box;
			padding: 40rpx 60rpx;
		}
	}

	.wx {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: #5ccc84 1px solid;
		margin-top: 60rpx;
		margin-left: 42%;
		text-align: center;
		line-height: 100rpx;
	}
</style>
