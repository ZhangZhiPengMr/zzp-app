<template>
	<view class="uni-list uni-border-top-bottom">
		<view v-for="(item,index) in list" :key="index" class="list flex justify-between pt-2 pb-2"
			@click="tiaoZhaun(item)">
			<view>
				<text v-if="item.icon" :class="item.icon"></text>
				<text class="title ml-2" style="font-size: 28rpx;font-weight: 400;">{{item.title}}</text>
			</view>
			<view>
				<text v-if="item.text">{{item.text}}</text>
				<image v-if="item.src" :src="item.src" mode=""></image>
				<text v-if="item.rightIcon" :class="item.rightIcon" style="font-size: 32rpx;"></text>
				<switch v-if="item.checked || item.checked === false" :checked="item.checked" />
				<input v-if="item.input" type="text" :placeholder="item.input" v-model="value[item.model]"
					class="text-right pr-2">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => ([])
			},
			value: {
				type: Object,
				defauIt: () => ({})
			}
		},
		data() {
			return {

			};
		},
		methods: {
			tiaoZhaun(item) {
				if (item.page) {
					this.navTo(item.page, {
						login: item.login
					})
					return
				}
				// 事件
				if (item.event) {
					this.$emit(item.event, item)
					return
				}
			}
		}
	}
</script>

<style lang="scss">
	view {
		box-sizing: border-box;
	}

	.page {
		background-color: #fafafa;

		.list {
			width: 100%;
			background-color: #fff;
			margin-bottom: 30rpx;
			border-bottom: 1px solid #f4f4f4;
			color: #3e4244;
		}

		.list:last-child {
			border-bottom: none;
		}
	}

	.icon-9:before,
	.icon-help:before,
	.icon-set:before {
		font-size: 40rpx;
		color: #1d78dc;
	}
</style>
