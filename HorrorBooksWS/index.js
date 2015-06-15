//JSON object with array of all books. 
var text = '[' +
'{ "Name":"The Shining" , "Author":"Stephen King" , "id": "1"},' +
'{ "Name":"It" , "Author":"Stephen King" , "id": "2" },' +
'{ "Name":"Under the Dome" , "Author":"Stephen King" , "id": "3" },' +
'{ "Name":"The Exorcist" , "Author":"William Peter Blatty" , "id": "4" },' +
'{ "Name":"American Psycho" , "Author":"Bret Easton Ellis" , "id": "5" },' +
'{ "Name":"The Silence of the Lambs" , "Author":"Thomas Harris" , "id": "6" } ]';

var obj = JSON.parse(text); //now its officially an object.

//1. get with no parameters, returning all horror books. 
exports.getHorrorBooks = function () {
	console.log("HorrorBooksWS: get horror books");
	return obj;
};

//2. get with parameter, returning a book by its id.
exports.getBookByID = function (id) {
	console.log("HorrorBooksWS: get book by ID")
	var result = [];
	for (i in obj){
		if(obj[i].id == id){
			result.push(obj[i]);
		}
	}
	return result;
};

//3. more complex get with parameter, returning all books by the same author. 
exports.getBookByAuthor = function (author) {
	console.log("HorrorBooksWS: get book by author")
	var result = [];
	for (i in obj){
		if(obj[i].Author == author){
			result.push(obj[i]);
		}
	}
	return result;
}