import 'babel-runtime/core-js/promise';  //模拟 ES2015 环境
import $ from 'jquery';
import 'amazeui';
import template from 'art-template/dist/template';
import layer from 'layer-dialog';

import XLSXIndex from './XLSXIndex';
import IndexTpl from './tpl/index.html';

export default class HomeIndex{
	constructor(){
		console.log("constructor");
		this.init();
		new XLSXIndex;
	};

	init() {
		console.log("init");
		$("#content").on('click','.ai',function(){
			window.layer.alert("进来看看!");
			//$(this).html("哈哈");
		});


		$.get('data.json',function(data, state) {
			console.log(data.success == true);
			var db = data.resultObject;
			if(data.success == true){
				$("#content").html(IndexTpl(db));
				template('appTpl', db);
			}else {
				$("#content").html('<div>数据加载中...</div>');
			}

		});

	};

}
