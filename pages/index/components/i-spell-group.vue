<template>
	<view class="border-top-14 mt-1">
		<view class="pl-2 pt-2 font-md font-weight-bold">
			拼团
		</view>
		<scroll-view scroll-x="true">
			<view class="scroll-row flex p-2">
				<view v-for="(item,index) in spellGroupData" :key="index" style="width: 340rpx;">
					<i-item :item="item"></i-item>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import information from "@/enum/information.js"
	export default {
		data() {
			return {
				information: information()
			}
		},
		props: {
			spellGroupData: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">
	.information {
		position: absolute;
		right: 10rpx;
		bottom: 20rpx;
		background-color: rgba(0, 0, 0, .4);
		padding: 0 10rpx;
	}
</style>
