var express = require('express'),
	url = require('url'),
	HorrorBooks = require('./HorrorBooksWS'), //will look for index.js in that dir
	app = express();

app.listen(process.env.PORT || 8080);
console.log("listening to port 8080");

//define first route, will call our first get function in HorrorBooksWS.
app.get('/AllHorrorBooks' , 

	//send header to client for debugging
	function (req, res, next){
		res.set('header-One', 'All-Horror-Books');
		next(); //call next callbak
	},
	//call exported function from HorrorBooksWS
	function (req, res) {
	res.json(HorrorBooks.getHorrorBooks());
	res.status(200);
});

//defined parameters callback, display a msg to console for confirmation.
app.param('bookID', function ( req, res, next, value){
	console.log("\nRequest recived with bookID: " + value);
	next();
});

//second route, recives parameter using defined parameters. call second function from HorrorBooksWS.
app.get('/BookByID/:bookID', function (req, res) {
	res.json(HorrorBooks.getBookByID(req.params.bookID));
	res.status(200);
});

//defined parameters callback, display a msg to console for confirmation.
app.param('author', function ( req, res, next, value){
	console.log("\nRequest recived with author: " + value);
	next();
});

//thired route, recives parameter using defined parameters. call thired function from HorrorBooksWS.
app.get('/BookByAuthor/:author', function (req, res) {
	res.json(HorrorBooks.getBookByAuthor(req.params.author));
	res.status(200);
});



