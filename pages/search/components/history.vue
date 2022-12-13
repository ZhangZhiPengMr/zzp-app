<template>
	<view class="">
		<view class="flex align-center justify-between py-3 px-2">
			<text class="font-md font-weight-bold">历史记录</text>
			<text class="font-sm text-light-muted" @click="handleDelete">清除全部</text>
		</view>
		<view class="flex flex-wrap px-2">
			<view class="bg-hover-light px-2 py-1 font-sm rounded-circle item" v-for="(item,index) in history"
				:key="index" @click="handleItem(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			history: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			// 搜索框回填事件
			handleItem(item) {
				this.$emit("handleItem", item)
			},
			// 清楚全部
			handleDelete(){
				this.$emit("handleDelete")
			}
		}
	}
</script>

<style>
	.item {
		margin-right: 12px;
		margin-bottom: 12px;
		line-height: 1;
		max-width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
