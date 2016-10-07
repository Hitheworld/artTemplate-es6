import $ from 'jquery';
import template from 'art-template/dist/template';

import ErrorTpl from './tpl/index.html';

export default class ErrorIndex {
	constructor(){
		this.init();
	};

	init() {
		var data = {

		}

		$("#content").html(ErrorTpl(data));
		template('appTpl', data);
	};

}