<template>
	<view>
		<view v-if="!loginState">
			<i-img></i-img>
		</view>
		<view v-else>
			<view class="my-list p-3">
				<!-- 我的列表组件 -->
				<my-list :lists="lists"></my-list>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	import iImg from "./components/i-img.vue"
	import lists from "@/config/liearn-list.js"
	export default {
		data() {
			return {
				lists: lists()
			}
		},
		computed: {
			...mapGetters(["loginState"])
		},
		components: {
			iImg
		},
		methods: {

		}
	}
</script>

<style lang="scss">
</style>
