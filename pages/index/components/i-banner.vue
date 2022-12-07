<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item v-for="(item,index) in bannerData" :key="index" class="swiper-item">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			bannerData: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		height: 300rpx;

		.swiper-item {
			width: 100%;
			height: 100%;
			overflow: hidden;
			padding: 0 20rpx;
			box-sizing: border-box;

			image {
				width: 100%;
				height: 100%;
				border-radius: 15rpx;
			}
		}
	}
</style>
