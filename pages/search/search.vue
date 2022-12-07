<template>
	<view>
		<view class="flex align-center justify-between">
			<text class="iconfont icon-fanhui m-1" style="font-size: 27px;" @click="navBack()"></text>
			<input type="text" class="iconfont icon-search search flex-1 flex align-center justify-center"
				placeholder="请输入搜索关键词" v-model="searchVal" @confirm="hanbleSearch">
			<text style="font-size: 30rpx;" @click="hanbleSearch">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal:"",   //搜索的内容
			};
		},
		methods:{
			//搜索事件
			hanbleSearch(){
				if(!this.searchVal){
					this.$util.msg("请输入关键词")
					return
				}
			}
		}
	}
</script>

<style lang="scss">
	.search {
		border-radius: 100rpx;
		height: 60rpx;
		background-color: rgb(246, 249, 251);
		color: #ccc;
		font-size: 32rpx;
	}

	.icon-search:before {
		color: #bbb;
		font-size: 36rpx;
		margin: 0 20rpx;
	}
</style>
