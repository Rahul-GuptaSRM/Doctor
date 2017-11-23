var mongoose = require("mongoose");
var schema = mongoose.Schema;

var data1 = new schema({
     
	fname : String,
	lname : String,
	email : String,
	mobile : String,
	sex: String,
	date : String,
	comment: String
});

module.exports = mongoose.model('blogwalla',data1);