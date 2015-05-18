var express = require('express'),
	url = require('url'),
	HorrorBooks = require('./HorrorBooksWS'),
	app = express();

app.listen(process.env.PORT || 8080);
console.log("listening to port 8080");

app.get('/AllHorrorBooks' , 

	function (req, res, next){
		res.set('header-One', 'All-Horror-Books');
		next();
	},

	function (req, res) {
	res.json(HorrorBooks.getHorrorBooks());
});

app.param('bookID', function ( req, res, next, value){
	console.log("\nRequest recived with bookID: " + value);
	next();
});

app.get('/BookByID/:bookID', function (req, res) {
	res.json(HorrorBooks.getBookByID(req.params.bookID));
});

app.param('author', function ( req, res, next, value){
	console.log("\nRequest recived with author: " + value);
	next();
});

app.get('/BookByAuthor/:author', function (req, res) {
	res.json(HorrorBooks.getBookByAuthor(req.params.author));
});



