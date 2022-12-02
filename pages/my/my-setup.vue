<template>
	<view class="p-1">
		<i-list :list="list"></i-list>
		<i-button :btnTitle="btnTitle" @clickButton="clickButton"></i-button>
	</view>
</template>

<script>
	import list from "@/config/my-setup.js"
	export default {
		data() {
			return {
				list: list(),
				btnTitle:'退出登录'
			}
		},
		methods:{
			//退出登录
			clickButton(){
				alert("退出登录")
			}
		}
	}
</script>

<style>
</style>
