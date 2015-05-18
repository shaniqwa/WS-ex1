var text = '{ "HorrorBooks" : [' +
'{ "Name":"The Shining" , "Author":"Stephen King" , "id": "1"},' +
'{ "Name":"It" , "Author":"Stephen King" , "id": "2" },' +
'{ "Name":"Under the Dome" , "Author":"Stephen King" , "id": "3" },' +
'{ "Name":"The Exorcist" , "Author":"William Peter Blatty" , "id": "4" },' +
'{ "Name":"American Psycho" , "Author":"Bret Easton Ellis" , "id": "5" },' +
'{ "Name":"The Silence of the Lambs" , "Author":"Thomas Harris" , "id": "6" } ]}';

var obj = JSON.parse(text);

exports.getHorrorBooks = function () {
	console.log("HorrorBooksWS: get horror books");
	return obj;
};

exports.getBookByID = function (id) {
	console.log("HorrorBooksWS: get book by ID")
	for (i in obj.HorrorBooks){
		if(obj.HorrorBooks[i].id == id){
			return obj.HorrorBooks[i];
		}
	}
};

exports.getBookByAuthor = function (author) {
	console.log("HorrorBooksWS: get book by author")
	var result = [];
	for (i in obj.HorrorBooks){
		if(obj.HorrorBooks[i].Author == author){
			result.push(obj.HorrorBooks[i]);
		}
	}
	return result;
}