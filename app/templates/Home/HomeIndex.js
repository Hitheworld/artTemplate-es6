import '../../../node_modules/babel-runtime/core-js/promise';  //模拟 ES2015 环境
import $ from 'jquery';
import 'amazeui';
import template from 'art-template/dist/template';

import ErrorIndex from '../Error/ErrorIndex';
import IndexTpl from './tpl/index.html';

export default class HomeIndex{
	constructor(){
		console.log("constructor");
		this.db = {
			load: false
		};
		this.init();
	};

	init() {
		const _this = this;
		console.log("init");
		$("#content").on('click','.ai',function(){
			window.layer.alert("进来看看!");
			//$(this).html("哈哈");
		});

		$("#content").on('click','.J_sub',function(){
			//获取用户名与密码
			var username = filterXSS($(".username").val());
			var userpassword = filterXSS($(".userpassword").val());
			alert("提交后的数据是:"+username+",密码是:"+ userpassword);
		});



		$.get('./assets/data/info.json',function(data, state) {
			_this.db.load = true;
			console.log(data.success == true);
			if(data.success == true && _this.db.load == true){
				//$("#content").html(template(data));
				$("#content").html(IndexTpl(data));
				template('content', data);
			}else {
				$("#content").html('<div>数据加载中...</div>');
			}
		}).fail(function() {
			new ErrorIndex;
		});

	};

}
