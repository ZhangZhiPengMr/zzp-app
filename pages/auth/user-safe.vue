<template>
	<view class="font">
		<i-list :list="list" v-model="info"></i-list>
		<view class="pl-3 pr-3">
			<i-button :btnTitle="btnTitle" @clickButton="clickButton"></i-button>
		</view>
	</view>
</template>

<script>
	import userApi from "@/api/user.js"
	export default {
		data() {
			return {
				info: {
					opassword: "",
					password: "",
					repassword: ""
				},
				btnTitle: "保   存",
				list: [{
						title: "原密码",
						input: "请输入原密码",
						model: "opassword"
					},
					{
						title: "新密码",
						input: "请输入新密码",
						model: "password"
					},
					{
						title: "确认密码",
						input: "请输入确认密码",
						model: "repassword"
					}
				]
			}
		},
		methods: {
			// 修改密码按钮
			async clickButton() {
				try {
					const response = await userApi.updatePassword(this.info)
					if (response == "ok") {
						this.$util.msg("修改成功")
						this.$store.commit("logout")
						setTimeout(() => {
							this.navBack()
						}, 1000)
					} else {
						this.$util.msg(response)
					}
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style>
	input {
		padding-right: 10rpx;
	}
</style>
