const app = getApp()
const http = require("../../http/http")
const API = require("../../http/API")
Page({
	data: {
		// 控制黑幕
		isOpen: true,
		// 轮播图
		banner: [],
		// 八大方向
		icon_list: [{
			icon: "imgv3_m/images-icon/submenu/h9-b_1806.png",
			text: "免费教程",
			route_name: "video_course_list_search",
			q_type: "Y",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h12-g_1806.png",
			text: "专业课程",
			route_name: "school_index",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h2-p_2212.png",
			text: "大触直播",
			route_name: "daniu_home",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h10-o_1806.png",
			text: "教程兑换",
			route_name: "video_course_list_search",
			q_type: "exchange",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h11-c_2212.png",
			text: "学员成长",
			route_name: "growth_index",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h11-c_1811.png",
			text: "每日一画",
			route_path: "/mryh",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h14-r_2212.png",
			text: "素材下载",
			route_name: "news_list",
			q_type: "sucai",
			show: !0
		}, {
			icon: "imgv3_m/images-icon/submenu/h5-p_2211.png",
			text: "社区问答",
			route_name: "community_qa",
			show: !0
		}],
		// 教程
		course: [],
		// 大触
		daniu: [],
		// 大触2
		danius:[],
		// 问答
		qaList: [],
		// 素材
		news: []
	},
	onLoad() {
		this.setData({
			// 开局 黑幕
			isOpen: true
		})
		// 轮播图
		http(API.banner, {}).then(res => {
			this.setData({
				banner: res.data.data
			})
		})
		// 热门教程
		http(API.hotSeries, {}).then(res => {
			this.setData({
				course: res.data
			})
		})
		// 大触直播
		http(API.daniu, {}).then(res => {
			this.setData({
				daniu: res.data.live,
				danius:res.data.course.data
			})
			console.log(this.data.daniu);
			console.log(this.data.danius);
		})
		// 问答专区
		http(API.qaList, {}).then(res => {
			this.setData({
				qaList: res.data
			})
		})
		// 素材下载
		http(API.news, {}).then(res => {
			this.setData({
				news: res.data.data
			})
		})
	},
	onShow() {
		this.setData({
			// 开局 黑幕
			isOpen: true
		})
	},
	// 事件
	// 黑幕的点击事件
	changeIsOpen() {
		this.setData({
			isOpen: false
		})
	}
})