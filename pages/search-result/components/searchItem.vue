<template>
	<view>
		<view v-for="(item,index) in searchList" :key="index" class="flex my-3">
			<i-item :item="item" :x="x"></i-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x: "flex"
			}
		},
		props: {
			searchList: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style>
</style>
