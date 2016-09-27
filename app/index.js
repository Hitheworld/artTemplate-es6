import $ from 'jquery';
import noEscapeTpl from './tpl/no-escape.tpl';
import template from 'art-template/dist/template';

//var listTpl = require('./tpl/list.tpl');

// 演示JSON数据
var data = {
	title: '国内要闻',
	time: (new Date).toString(),
	list: [
		{
			title: '<油价>调整周期缩至10个工作日 无4%幅度限制',
			url: 'http://finance.qq.com/zt2013/2013yj/index.htm'
		},
		{
			title: '明起汽油价格每吨下调310元 单价回归7元时代',
			url: 'http://finance.qq.com/a/20130326/007060.htm'
		},
		{
			title: '广东副县长疑因抛弃情妇遭6女子围殴 纪检调查',
			url: 'http://news.qq.com/a/20130326/001254.htm'
		},
		{
			title: '湖南27岁副县长回应质疑：父亲已不是领导',
			url: 'http://news.qq.com/a/20130326/000959.htm'
		},
		{
			title: '朝军进入战斗工作状态 称随时准备导弹攻击美国',
			url: 'http://news.qq.com/a/20130326/001307.htm'
		}
	]
};

var list = {
	title: '测试数组',
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
}

var noEscape = {
	value: '<span style="color:#F00">hello world!</span>'
}

var inline = {
	title: '测试模板内联',
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
}

//document.getElementById('list').innerHTML = listTpl(list)
document.getElementById('content').innerHTML = noEscapeTpl(noEscape)
document.getElementById('inline').innerHTML = template('inlineTpl', inline)

//var html = IndexTpl(data);
//document.getElementById('app').innerHTML = template('inlineTpl', html)