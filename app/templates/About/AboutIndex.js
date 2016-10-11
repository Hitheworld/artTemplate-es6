import $ from 'jquery';
import template from '../../../node_modules/art-template/dist/template';

import IndexTpl from './tpl/index.tpl';


export default class AboutIndex {
	constructor(id){
		alert("id是:"+id);
		this.init();
	};

	init() {
		// 演示JSON数据
		var data = {};

		$("#content").html(IndexTpl(data));
		template('appTpl', data);
	};

}