<template>
	<view class="page">
		<text class="text-white m-1 iconfont icon-fanhui" @click="back"></text>
		<view class="content">
			<view class="con">
				<view class="h3">
					绑定手机号
				</view>
				<i-form :btnTitle="btnTitle" v-model="bindPhone" @clickButton="clickButton" :fromList="fromList">
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
				btnTitle: '绑定',
				bindPhone: {
					// 手机号
					phone: "18739240231",
					// 验证码
					code: "",
				},
				// form组件需要的
				fromList: [{
						placeholder: "请输入手机号",
						loginInfo: "phone",
						icon: "iconfont icon-wode"
					},
					{
						placeholder: "验证码",
						loginInfo: "code",
						icon: "iconfont icon-suoding_huaban",
						button: true
					}
				]
			}
		},
		methods: {
			// 返回我的页面
			back() {
				this.navBack()
			},
			// 绑定手机号
			async clickButton() {
				try {
					const response = await userApi.bindPhone(this.bindPhone)
					this.navTab("/pages/my/my")
					location.reload()
				} catch (e) {
					//TODO handle the exception
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

	input {
		background-color: #f5f5f5;
		width: 630rpx;
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
</style>
