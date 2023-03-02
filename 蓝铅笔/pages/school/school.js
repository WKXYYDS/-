// index.js
// 获取应用实例
const app = getApp()
const API = require("../../http/API")
const http = require("../../http/http")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		btnList: [{
				text: "全部课程",
				img: "../../image/h1-b_2211.png"
			},
			{
				text: "直播班",
				img: "../../image/h2-o_2211.png"
			},
			{
				text: "特训班",
				img: "../../image/h3-p_2211.png"
			},
			{
				text: "入门班",
				img: "../../image/h4-g_2211.png"
			},
			{
				text: "学习问答",
				img: "../../image/h5-p_2211.png"
			},
			{
				text: "学员作业",
				img: "../../image/h6-r_2211.png"
			},
			{
				text: "怎样学习",
				img: "../../image/h7-y_2211.png"
			},
			{
				text: "关于我们",
				img: "../../image/h8-c_2211.png"
			}

		],
		swiperImg: [],
		// 右侧热门推荐
		hotTuiJ: [{
				cont: " 坚持画画，领高额奖学金"
			},
			{
				cont: " 30天学会用ipad画插画"
			},
			{
				cont: " 日系插画，怎么上手"
			},
			{
				cont: " 重磅！日系插画直播教学"
			},
		],
		// 推荐图片
		tuJimg: [],
		// 
		historyList: [{
				date: '2011',
				desTitle: '成立初期',
				desDetail: '蓝铅笔社区论坛上线运营'
			},
			{
				date: '2014',
				desTitle: '迅速成长',
				desDetail: '蓝铅笔社区网校完成天使轮风险投资蓝铅笔网校兴趣插画类学习项目启动'
			},
			{
				date: '2016',
				desTitle: '持续攀升',
				desDetail: '蓝铅笔学员任治和荣获北美动画师擂台赛冠军蓝铅笔获得中文在线文化产基金、华睿本投资的千万人民币A轮融资'
			},
			{
				date: '2018',
				desTitle: '创新发展',
				desDetail: '蓝铅笔荣获国家级“高新技术企业”评定蓝铅笔向国家版权局申获7项软件著作权'
			},
			{
				date: '2020',
				desTitle: '口碑信任',
				desDetail: '蓝铅笔荣获“新浪中国”2020年度影响力艺术教育品牌蓝铅笔荣获“回响中国”2020年度口碑影响力职业教育品牌'
			},
			{
				date: '2021',
				desTitle: '口碑信任',
				desDetail: '蓝铅笔参与第七届中国品牌创新发展论坛并入选“中国品牌创新发展工程”蓝铅笔创始人参与央视《大国匠心》、《企业家精神》节目录制'
			},
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		http(API.smallBanner).then(res => {
			this.setData({
				swiperImg: res.data.data
			})
		})
		http(API.hotClass).then(res => {
			console.log(res.data.data);
			this.setData({
				tuJimg: res.data.data
			})
		})
		http(API.zhujiang).then(res => {
			this.setData({
				teachImg: res.data.data
			})
		})
		http(API.stuShow).then(res => {
			console.log(res);
			this.setData({
				stu_shows: res.data.data
			})
		})
	},
})