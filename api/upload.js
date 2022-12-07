import config from "@/config/index.js"
import store from "@/store/index.js"
const upload = (options) => {

	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: config.baseUrl + options.url,
			filePath: options.file || "",
			method: 'POST',
			name: options.name || "file",
			header: options.header || {},
			formData: options.data || {},
			timeout: 8000,
			header: {
				appid: "bd9d01ecc75dbbaaefce",
				token: store.state.userInfo.token || ""
			},
			success: res => {
				if(res.statusCode === 200){
					resolve(JSON.parse(res.data))
				}
			},
			fail: err => {
				reject(err)
			}
		})
	})
}

export default upload
