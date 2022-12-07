<template>
	<view class="p-3">
		<i-list :list="list" v-model="uaerInfo" @editAvatar="editAvatar" @editSex="editSex"></i-list>
		<i-button btnTitle="提交" @clickButton="clickButton"></i-button>
	</view>
</template>

<script>
	import userApi from "@/api/user.js"
	import list from "@/config/user.js"
	export default {
		data() {
			return {
				uaerInfo: this.$store.state.userInfo,
				list: list(),
			}
		},
		methods: {
			//提交功能
			async clickButton() {
				// 开启loading加载
				uni.showLoading({
					title: "提交中",
					mask: true
				})
				try {
					const response = await userApi.update(this.uaerInfo)
					if (response == "ok") {
						this.$util.msg("提交成功")
					}
					console.log(response);
					uni.hideLoading()
				} catch (e) {
					//TODO handle the exception
					uni.hideLoading()
					console.log(e);
				}
			},
			//更换头像
			editAvatar() {
				uni.chooseImage({
					count: 1, //默认9
					success: async (res) => {
						// 获取到上传的文件信息
						const file = res.tempFilePaths[0]
						// 开启loading加载
						uni.showLoading({
							title: '更换头像中',
							mask: true
						})

						try {
							const response = await userApi.uploadImg(file)
							if (response.code === 20000) {
								this.uaerInfo.avatar = response.data
								this.$store.commit("setToken", this.uaerInfo)
								this.list = list()
								uni.hideLoading()
							} else {
								uni.hideLoading()
							}

						} catch (e) {
							uni.hideLoading()
							console.log("e", e)
						}
					}
				});
			},
			//更换性别
			editSex() {
				const item = ["未知", '男', '女']
				uni.showActionSheet({
					itemList: item,
					success: async (res) => {
						const index = res.tapIndex
						this.uaerInfo.sex = item[index]
						this.$store.commit("setToken", this.uaerInfo)
						this.list = list()
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}
		}
	}
</script>

<style>

</style>
