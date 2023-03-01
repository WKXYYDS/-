const baseurl = "https://m.lanqb.com/api"
module.exports = {
	// 轮播图
	banner: baseurl + "/home/banner?type=m&local_code=10&order=weight&limit=6",
	// 热门教程	
	hotSeries: baseurl + "/home/series",
	// 大触直播
	daniu: baseurl + "/daniu?link=paging&live=3&is_live=1&limit=3&page=1",
	// 问答专区
	qaList: baseurl + "/home/heat/qa-list",
	// 素材下载
	news: baseurl + "/news?type=sucai&page=1",
	// 教程轮播
	series: baseurl + "/series/banners?type=m&position=3&locality=0&order=weight&limit=6",
	// 教程区: 各种选择
	course: baseurl + "/course-group-list",
	// 教程选购区
	video: baseurl + "/course/video",
	// 各种选择 的选购区
	classify: baseurl + "/course/video?is_free=Y&page=1&limit=10&course_subjects_ids=122"
}