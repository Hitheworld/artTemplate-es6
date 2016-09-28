import {Router} from 'director';

var home = function() {
	require(['./Home/home'], function (e) {
		console.log(e);
	});
};

var author = function () {
	console.log("author");
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
	'/': home,
	'/author': author,
	'/books': [books, function() {
		console.log("An inline route handler.");
	}],
	'/books/view/:bookId': viewBook,
	'*': error,
};

var router = new Router(routes);

router.init();