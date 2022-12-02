<template>
	<view class="p-2">
		<i-list :list="list"></i-list>
	</view>
</template>

<script>
	import list from "@/config/my-problem.js"
	export default{
		data(){
			return{
				list:list()
			}
		}
	}
</script>

<style>
</style>