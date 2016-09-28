import $ from 'jquery';
import {template} from 'art-template/dist/template';

import IndexTpl from './tpl/index.tpl';
import './../css/index.less';

// 演示JSON数据
var data = {
	title: '国内要闻',
	time: (new Date).toString(),
	list: [
		{
			title: '<油价>调整周期缩至10个工作日 无4%幅度限制',
			url: '#/author'
		},
		{
			title: '明起汽油价格每吨下调310元 单价回归7元时代',
			url: '#/books'
		},
		{
			title: '广东副县长疑因抛弃情妇遭6女子围殴 纪检调查',
			url: '#/books/view/7899'
		},
		{
			title: '湖南27岁副县长回应质疑：父亲已不是领导',
			url: '#/87874/788'
		},
		{
			title: '朝军进入战斗工作状态 称随时准备导弹攻击美国',
			url: '#/home/index'
		}
	]
};

$("#content").html(IndexTpl(data));
template('appTpl', data);