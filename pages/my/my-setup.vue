<template>
	<view class="p-1">
		<i-list :list="list" @clearStorage="clearStorage"></i-list>
		<i-button :btnTitle="btnTitle" @clickButton="clickButton" v-if="loginState"></i-button>
	</view>
</template>

<script>
	import list from "@/config/my-setup.js"
	import userApi from "@/api/user.js"
	import {
		mapGetters
	} from "vuex"
	export default {
		data() {
			return {
				list: list(),
				btnTitle: '退出登录'
			}
		},
		computed: {
			...mapGetters(["loginState"])
		},
		methods: {
			//退出登录
			clickButton() {
				try {
					// 提示
					uni.showModal({
						content: '是否要退出登录？',
						success: async (res) => {
							if (res.confirm) {
								const response = await userApi.logout()
								this.$util.msg(response)
								this.$store.commit("logout")
							}
						},
					});
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			// 清楚数据
			clearStorage(obj) {
				// 提示
				uni.showModal({
					// title: '是否清楚缓存?',
					content: '是否清楚缓存？',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorage()
							this.$set(obj, 'text', '0KB')
							this.$util.msg('清除成功')
						}
					},
				});
			}
		}
	}
</script>

<style>
</style>
