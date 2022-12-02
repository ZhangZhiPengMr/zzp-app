export default () => {
	return [{
			title: "账户安全",
			rightIcon: 'iconfont icon-jinru',
			login: true,
			page: "/pages/auth/user-safe"
		},
		{
			title: "清除缓存",
			text: "2.00kb",
			login: false,
			event: "clearStorage"
		},
		{
			title: "检查更新",
			rightIcon: 'iconfont icon-jinru',
			login: false
		},
		{
			title: "当前版本",
			text: "1.0.0",
			login: false
		}
	]
}
