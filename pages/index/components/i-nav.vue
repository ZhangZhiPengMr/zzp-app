<template>
	<view class="flex flex-wrap py-2">
		<view class="flex flex-column align-center justify-center py-1 icons" v-for="(item,index) in navData" :key="index">
			<image :src="item.src" mode="" class="img"></image>
			<text class="font-sm text-muted mt-1">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			navData: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style>
	.icons{
		width: 25%;
	}
	.img {
		width: 70rpx;
		height: 72rpx;
		border-radius: 100%;
	}
</style>
