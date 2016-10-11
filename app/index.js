import 'babel-polyfill';
import $ from 'jquery';
import 'amazeui';
import {Router} from 'director';

//样式文件
require('normalize.css');
require('layer-dialog/skin/layer.css');
require('./assets/styles/index.less');

import HomeIndex from './templates/Home/HomeIndex';
import AboutIndex from './templates/About/AboutIndex';
import ErrorIndex from './templates/Error/ErrorIndex';

class Index {
	constructor(){
		this.init();
	};

	init() {
		this.routes = {
			'/(home)': {
				before: function () {
					console.log("1");
					//$("#content").empty();
				},
				on: function () {
					console.log("2")
					new HomeIndex();
				},
				after: function (id){
					alert("离开home");
					history.go(0);
				}
			},
			'/about/:uid': {
				before: function (id) {
					console.log("author-----1");
					$("#content").empty();
				},
				on: function (id) {
					console.log("author-------2")
					new AboutIndex(id);
				},
				after: function (id){
					alert("离开about");
					history.go(0);
				}
			},
			'notfound': {
				before: function () {
					console.log("books-------1");
					$("#content").empty();
				},
				on: function () {
					console.log("books---------2")
					new ErrorIndex();
				}, function() {
					console.log("An inline route handler.");
				}
			}
		};

		var router = new Router(this.routes);
		router.init();
		router.configure({
			on: function (data) {

			}
		});
	};

}

export default new Index();
