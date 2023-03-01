const http = require("../../http/http")
const API = require("../../http/API")
Page({
	data: {
		// 七大分类
		classification: [{
				id: 0,
				title: "最新"
			},
			{
				id: 1,
				title: "入门"
			},
			{
				id: 2,
				title: "进阶"
			},
			{
				id: 3,
				title: "免费"
			},
			{
				id: 4,
				title: "图文"
			},
			{
				id: 5,
				title: "总换"
			},
			{
				id: 6,
				title: "专题"
			}
		],
		// 七大
		indexs: 0,
		// 七大
		level: 0,
		// 轮播
		series: [],
		// 满汉全席
		course: [],
		// 控制满汉全席 的长度
		lengths: false,
		// 满汉全席的选中样式改变
		one: 0,
		// 教程区
		video: [],
		// 教程区 类型
		type: 1,
		// 教程区 页数
		page: 1,
		// 教程区 数量
		limit: 10,
		// 多选
		is_free: "Y",
		// 多选
		course_subjects_ids: 0,
		// 搜索关键字
		title: ""
	},

	onLoad() {

		// 轮播
		http(API.series, {}).then(res => {
			this.setData({
				series: res.data.data
			})
		})

		// 教程区: 各种选择
		http(API.course, {}).then(res => {
			this.setData({
				course: res.data.course_subjects
			})
		})

		// 教程区
		this.course()
	},

	//  教程区
	course() {
		http(API.video, {
			type: this.data.type,
			page: this.data.page,
			limit: this.data.limit,
		}).then(res => {
			if (this.data.page == 1) {
				this.setData({
					video: res.data.data
				})
			} else {
				this.setData({
					video: this.data.video.concat(res.data.data)
				})
			}
		})
	},

	// 七大
	seven() {
		http(API.video, {
			level: this.data.level,
			page: this.data.page,
			limit: this.data.limit,
		}).then(res => {
			if (this.data.page == 1) {
				this.setData({
					video: res.data.data
				})
			} else {
				this.setData({
					video: this.data.video.concat(res.data.data)
				})
			}
		})
	},
	// 多选
	classify() {
		http(API.video, {
			is_free: this.data.is_free,
			page: this.data.page,
			limit: this.data.limit,
			course_subjects_ids: this.data.course_subjects_ids
		}).then(res => {
			if (this.data.page === 1) {
				this.setData({
					video: res.data.data
				})
			} else {
				this.setData({
					video: this.data.video.concat(res.data.data)
				})
			}
		})
	},
	// 搜索
	keywordsChanges() {
		http(API.video, {
			type: this.data.type,
			page: this.data.page,
			limit: this.data.limit,
			title: this.data.title
		}).then(res => {
			if (this.data.page === 1) {
				this.setData({
					video: res.data.data
				})
			} else {
				this.setData({
					video: this.data.video.concat(res.data.data)
				})
			}
		})
	},
	// 事件
	// 七大分类点击事件
	fication(e) {
		this.setData({
			indexs: e.target.dataset.id,
			level: e.target.dataset.id,
			page: 1
		})
		if (e.target.dataset.id === 0) {
			this.course()
			this.setData({
				one: 0
			})
		} else if (e.target.dataset.id <= 3) {
			this.seven()
		}
	},

	// 控制满汉全席的长度
	control() {
		this.setData({
			lengths: !this.data.lengths
		})
	},

	// 满汉全席的选中样式改变
	ones(e) {
		this.setData({
			one: e.target.dataset.index,
			course_subjects_ids: e.target.dataset.id,
			page: 1
		})
		if (e.target.dataset.id == 0) {
			this.course()
		} else {
			this.classify()
		}
	},
	// 搜索
	keywordsChange() {
		this.setData({
			page: 1
		})
		this.keywordsChanges()
	},
	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		this.setData({
			page: this.data.page + 1
		})
		if (this.data.level === 0) {
			this.course()
		} else {
			this.seven()
		}
		if (this.data.title !== "") {
			this.keywordsChanges()
		} else {
			this.course()
		}
	}
})