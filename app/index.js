//import 'babel-polyfill';
import $ from 'jquery';
import {Router} from 'director';


var home = function() {
	require(['./Home/home'], function (e) {
		console.log(e);
	});
};

var about = function () {
	require(['./About/index'], function (e) {
		console.log(e);
		console.log("about");
	});
};

var books = function () {
	console.log("books");
};

var viewBook = function (bookId) {
	console.log("viewBook: bookId is populated: " + bookId);
};

var error = function() {
	require(['./Error/error'], function (e) {
		console.log(e);
	});
}

var routes = {
	'/home': {
		before: function (id) {
			console.log("1");
			//$("#content").empty();
		},
		on: function (id) {
			console.log("2")
			home();
		},
		after: function (id){
			alert("离开home");
			history.go(0);
		}
	},
	'/about': {
		before: function (id) {
			console.log("author-----1");
			$("#content").empty();
		},
		on: function (id) {
			console.log("author-------2")
			about();
		},
		after: function (id){
			alert("离开about");
			history.go(0);
		}
	},
	'/books': [{
		before: function (id) {
			console.log("books-------1");
			$("#content").empty();
		},
		on: function (id) {
			console.log("books---------2")
			books();
		}
	}, function() {
		console.log("An inline route handler.");
	}],
	'/books/view/:bookId': viewBook,
	'notfound': {
		before: function (id) {
			console.log("books-------1");
			$("#content").empty();
		},
		on: function (id) {
			console.log("books---------2")
			error();
		}
	},
};

var router = new Router(routes);
router.init();
router.configure({
	on: function (data) {

	}
});

