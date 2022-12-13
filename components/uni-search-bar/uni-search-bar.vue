<template>
	<view class="flex align-center justify-between py-1">
		<text class="iconfont icon-fanhui m-1" style="font-size: 54rpx;" @click="handleBack"></text>

		<view class="flex-1 position-relative">
			<input type="text" class="iconfont icon-search search" placeholder="请输入搜索关键词" v-model="searchVal"
				@confirm="hanbleSearch" @click="clickSearch">
			<text v-if="searchVal" class="uni-icon-clear icon" @click="handleDeleteValue"></text>
		</view>
		<text class="font mx-1 font-weight-normal" @click="hanbleSearch" v-if="state">搜索</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: "", //搜索的内容
			};
		},
		props: {
			state: {
				type: Boolean,
				default: () => true
			}
		},
		methods: {
			//搜索事件
			hanbleSearch() {
				if (!this.searchVal) {
					this.$util.msg("请输入关键词")
					return
				} else {
					this.$emit("hanbleSearch", this.searchVal)
				}
			},
			clickSearch(){
				this.$emit("clickSearch")
			},
			handleBack(){
				this.$emit("handleBack")
			},
			// 清楚搜索框的内容
			handleDeleteValue() {
				this.searchVal = ""
			}
		}
	}
</script>

<style lang="scss">
	.search {
		border-radius: 100rpx;
		height: 60rpx;
		background-color: rgb(246, 249, 251);
		font-size: 28rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.icon-search:before {
		color: #bbb;
		font-size: 36rpx;
		margin: 0 20rpx;
	}

	.icon {
		position: absolute;
		top: 15rpx;
		right: 20rpx;
	}
</style>
