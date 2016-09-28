import $ from 'jquery';
import template from 'art-template/dist/template';

import IndexTpl from './tpl/index.tpl';


// 演示JSON数据
var data = {};

$("#content").html(IndexTpl(data));
template('appTpl', data);