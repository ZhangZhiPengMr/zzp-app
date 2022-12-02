<template>
	<form>
		<input v-for="(item,index) in fromList" :key="index" class="mt-5" :placeholder="item.placeholder"
			:password="item.password" v-model="value[item.loginInfo]">
		<i-button :btnTitle="btnTitle" @clickButton="clickButton"></i-button>
	</form>
</template>

<script>
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

			}
		},
		methods: {
			clickButton() {
				this.$emit("clickButton")
			}
		}
	}
</script>

<style>
	input {
		background-color: #f5f5f5;
		width: 630rpx;
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
</style>
