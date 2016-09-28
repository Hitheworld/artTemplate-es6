import $ from 'jquery';
import template from 'art-template/dist/template';

import ErrorTpl from './tpl/index.tpl';

var data = {

}

$("#content").html(ErrorTpl(data));
template('appTpl', data);