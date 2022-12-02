<template>
	<button class="mt-4 text-white" @click="clickButton">{{btnTitle}}</button>
</template>

<script>
	export default {
		props: {
			btnTitle: String
		},
		methods:{
			clickButton(){
				this.$emit("clickButton")
			}
		}
	}
</script>

<style>
	button {
		height: 100rpx;
		line-height: 100rpx;
		background-color: #5ccc84;
	}
</style>
