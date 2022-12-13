<template>
	<view class="border-top-14">
		<view class="p-2">
			<view class="flex justify-between mb-3">
				<text class="font-md font-weight-bold">最新列表</text>
				<text class="font-sm text-light-muted">查看更多</text>
			</view>
			<view class="mt-4">
				<view v-for="(item,index) in newestList" :key="index" class="flex my-3">
					<i-item :item="item" :x="x"></i-item>
				</view>
			</view>
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
			newestList: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">

</style>
