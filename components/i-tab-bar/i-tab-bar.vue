<template>
	<view class="tab-bar" @touchmove.stop.prevent="()=>{}">
		<view class="bar-view">
			<view class="bar-item font-md" @click="handleChangeTab(index)" :class="{current : index === value}"
				v-for="(item,index) in tabs" :key="index">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
				default: 0
			},
			tabs: {
				type: Array,
				default: () => [{
					id: '1',
					name: '课程',
					type:"media"
				}, {
					id: '2',
					name: '专栏',
					type:"column"
				}]
			}
		},
		methods: {
			handleChangeTab(index) {
				this.$emit("input", index)
			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		border-bottom: 1px solid #efeff4;

		.bar-view {
			width: 100%;
			text-align: center;
			display: flex;

			.bar-item {
				flex: 1;
				font-size: 30rpx;
				line-height: 100rpx;
				position: relative;

				&::after {
					display: block;
					content: "";
					width: 0;
					height: 0;
					position: absolute;
					border-bottom: 10rpx solid #01cf8a;
					left: 50%;
					bottom: 6rpx;
					border-radius: 20rpx;
					transform: translateX(-50%);
					transition: .3s;
				}
			}

			.current {
				color: #01cf8a;

				&::after {
					width: 60rpx;
				}
			}
		}
	}
</style>
