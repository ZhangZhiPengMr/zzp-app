<template>
	<view>
		<!-- 搜索组件 -->
		<uni-search-bar :state="state" @clickSearch="clickSearch" @handleBack="handleBack"></uni-search-bar>
		<!-- 课程专栏组件 -->
		<i-tab-bar :tabs="tabs" v-model="activeIndex" @input="handleChangeTab"></i-tab-bar>
		<!-- 搜索组件 -->
		<view class="px-2">
			<search-item :searchList="searchList"></search-item>
		</view>
	</view>
</template>

<script>
	import serach from "@/api/search.js"
	import searchItem from "./components/searchItem.vue"
	export default {
		data() {
			return {
				state: false,
				activeIndex: 0,
				tabs: [{
					id: '0',
					name: '课程',
					type: "course"
				}, {
					id: '1',
					name: '专栏',
					type: "column"
				}],
				searchInfo: {
					keyword: "",
					page: 1,
					type: "course"
				},
				searchList: []
			};
		},
		onLoad(options) {
			this.searchInfo.keyword = options.keyword
			this.getTypeList()
		},
		methods: {
			async getTypeList() {
				try {
					const response = await serach.searchApi(this.searchInfo)
					this.searchList = response.rows
					console.log(response);
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			// 切换课程和专栏
			handleChangeTab(index) {
				this.searchInfo.type = this.tabs[index].type
				this.getTypeList()
			},
			// 返回上一步
			clickSearch() {
				this.navTo(`/pages/search/search`)
			},
			// 返回搜索页
			handleBack() {
				this.navTo(`/pages/search/search`)
			}
		},
		components: {
			searchItem
		},
	}
</script>

<style lang="scss">

</style>
