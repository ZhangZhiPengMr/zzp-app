<template>
	<view>
		<!-- 搜索框组件 -->
		<i-search></i-search>
		<!-- 轮播图组件 -->
		<i-banner :bannerData="bannerData"></i-banner>
		<!-- 活动列表 -->
		<i-nav :navData="navData"></i-nav>
		<!-- 优惠券列表组件 -->
		<i-coupon :couponData="couponData" @handleReceive="handleReceive"></i-coupon>
		<!-- 组团组件 -->
		<i-spell-group :spellGroupData="spellGroupData"></i-spell-group>
		<!-- 最新列表组件 -->
		<i-newest-list :newestList="newestList"></i-newest-list>
		<!-- 底部图片 -->
		<image :src="imageAd" mode="" class="imageAd border-top-14"></image>
	</view>
</template>

<script>
	import indexApi from "@/api/index.js"
	import iBanner from "./components/i-banner.vue"
	import iNav from "./components/i-nav.vue"
	import iCoupon from "./components/i-coupon.vue"
	import iSpellGroup from "./components/i-spell-group.vue"
	import iNewestList from "./components/i-newest-list.vue"
	export default {
		data() {
			return {
				bannerData: [], //轮播图数据
				navData: [], //活动列表数据
				couponData: [], //优惠券列表数据
				spellGroupData: [], //拼团数据
				newestList: [], //最新列表数据
				imageAd: "", //底部图片
			}
		},
		// 页面一开始就加载的生命周期
		onLoad() {
			this.getIndexData()
			this.getCoupon()
			this.getSpellGroupData()
		},
		onPullDownRefresh() {
			this.getIndexData()
			this.getCoupon()
			uni.stopPullDownRefresh()
		},
		methods: {
			//请求首页数据
			async getIndexData() {
				try {
					const response = await indexApi.index()
					// 轮播图数据
					this.bannerData = response[1].data
					// 活动列表数据
					this.navData = response[2].data
					// 最新列表
					this.newestList = response[5].data
					// 底部图片
					this.imageAd = response[6].data
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			//获取可用优惠券列表
			async getCoupon() {
				try {
					const response = await indexApi.coupon()
					this.couponData = response
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			// 获取可用拼团列表
			async getSpellGroupData() {
				try {
					const response = await indexApi.group()
					this.spellGroupData = response.rows
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			// 领取优惠卷
			async handleReceive(item) {
				if (item.isgetcoupon) {
					this.$util.msg("你已经领取过了")
				} else {
					try {
						uni.showLoading({
							title: "加载中",
							mask: true
						})
						const response = await indexApi.receive({
							coupon_id: item.id
						})
						this.$util.msg(response)
						this.getCoupon()
					} catch (e) {
						console.log(e);
						//TODO handle the exception
					}
				}
			}
		},
		watch: {
			"$store.state.userInfo": {
				handler(newValue) {
					this.getCoupon()
				},
				immediate: true
			}
		},
		//注册组件
		components: {
			iBanner,
			iNav,
			iCoupon,
			iSpellGroup,
			iNewestList
		},
	}
</script>

<style lang="scss">
	.imageAd {
		width: 750rpx;
		height: 360rpx;
	}
</style>
