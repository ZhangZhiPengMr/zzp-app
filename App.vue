<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入公共样式表 */
	@import url("common/free.css");
	/* 引入动画库 */
	@import url("common/animate.min.css");
	/* 引入字体图标 */
	@import url("/common/iconfont.css");
	/* 引入额外添加的图标库 */
	@import url("/static/font/iconfont.css");
	/* 引入主题样式表 */
	@import url("common/common.css");
</style>
