<template>
	<view class="flex flex-wrap py-2">
		<view class="flex flex-column align-center justify-center py-1 icons" v-for="(item,index) in navData"
			:key="index" @click="handleToPath(item)">
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
		},
		methods: {
			handleToPath(item) {
				// 先判断跳转的页面有没有webview页面
				if (item.type === 'webview' && item.url) {
					this.navTo("/pages/webview/webview?url=" + item.url)
					return
				}

				switch (item.module) {
					case 'test':
						//考试页面
						this.navTo("/pages/test-list/test-list")
						break;
					case "bbs":
						// 社区
						this.navTo("/pages/bbs/bbs")
						break;
					case "book":
						// 电子书
						this.navTo("/pages/book-list/book-list")
						break;
					default:
						this.navTo("/pages/list/list?module=" + item.module)
						break;
				}
			}
		}
	}
</script>

<style>
	.icons {
		width: 25%;
	}

	.img {
		width: 70rpx;
		height: 72rpx;
		border-radius: 100%;
	}
</style>
