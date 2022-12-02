<template>
	<view class="p-1">
		<i-list :list="list"></i-list>
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
			async clickButton() {
				try {
					const response = await userApi.logout()
					this.$util.msg(response)
					this.$store.commit("logout")
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style>
</style>
