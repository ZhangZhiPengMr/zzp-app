import store from '@/store'

export default () => {
	const userInfo = store.state.userInfo
	return [{
			title: "头像",
			event: "editAvatar",
			src: userInfo.avatar
		},
		{
			title: "昵称",
			input: "未填写",
			model: "nickname"
		},
		{
			title: "性别",
			event: "editSex",
			text: userInfo.sex
		},
		{
			title: "电话",
			page: "/pages/bind-phone/bind-phone",
			login: true,
			text: userInfo.phone
		},
	]
}
