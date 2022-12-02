<template>
	<view class="page">
		<text class="text-white m-1 iconfont icon-fanhui" @click="back"></text>
		<view class="content">
			<view class="con">
				<view class="h3">
					登录
				</view>
				<!-- 表单组件 -->
				<i-form @clickButton="clickButton" v-model="loginInfo" :fromList="fromList" :btnTitle="btnTitle">
				</i-form>
				<view class="flex justify-between mt-4">
					<view class="text-success font-sm">
						注册账号
					</view>
					<view class="text-hover-light font-sm">
						忘记密码？
					</view>
				</view>
				<view class="uni-icons wx">
					wx
				</view>
				<view class="text-center text-muted mt-4">
					<checkbox-group @change="hanbleCange">
						<label>
							<checkbox :checked="checked" />&ensp;<text>已阅读并同意用户协议&隐私声明</text>
						</label>
					</checkbox-group>
				</view>
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
					username: "zzpadmin", //账号
					password: "062037", //密码
				},
				checked: false,
				btnTitle: '登  录',
				// form组件需要的
				fromList: [{
						placeholder: "请输入用户名",
						loginInfo: "username"
					},
					{
						placeholder: "请输入密码",
						loginInfo: "password",
						password: true
					}
				]
			}
		},
		methods: {
			// 返回上一步
			back() {
				this.navTab("/pages/my/my")
			},
			// 同意登录
			hanbleCange() {
				this.checked = !this.checked
			},
			//登录
			async clickButton() {
				//判断是否勾选请先阅读并同意用户协议&隐私声明
				if (this.checked) {
					// 提示登录中
					uni.showLoading({
						title: '登录中',
						mask: true
					})
					//调取登录的接口
					try {
						const response = await userApi.login(this.loginInfo)
						this.loginSuccess(response)
						uni.hideLoading()
					} catch (e) {
						console.log(e);
						uni.hideLoading()
					}
				} else {
					this.$util.msg("请先阅读并同意用户协议&隐私声明")
				}
			},
			//登录成功是调用
			loginSuccess(data) {
				this.$util.msg("登录成功")
				this.$store.commit('setToken', data)
				this.navTo("/pages/bind-phone/bind-phone")
			}
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
