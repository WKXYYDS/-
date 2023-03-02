const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")
Page({
	data: {
		// 控制开局tar样式
		blue: 0,
		// 直播
		zb: []
	},
	onLoad() {
		// 大触直播
		http(API.zb).then(res => {
			console.log(res.data.course.data);
			this.setData({
				zb: res.data.course.data
			})
		})
	},
	// 事件
	blue(e) {
		this.setData({
			blue: e.currentTarget.dataset.index
		})
	}
})