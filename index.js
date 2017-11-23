var express = require("express");
var app = express();
//var favicon = require("serve-favicon");
var path = require("path");
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var router = express.Router();
var ejs = require("ejs");


app.use(morgan('dev'));

var dbURI = 'mongodb://localhost:27017/Manish';
mongoose.Promise = global.Promise;
mongoose.connect(dbURI,{ useMongoClient: true },function(err)
	{
		if(err)
          {
          	console.log("error");
          }
          else{
          	console.log("successfully connected");
          }
	});
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var data = require('./data/config.js');
app.use('/',data);

app.set('view engine','ejs');
app.use(express.static('./public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res)
{
	res.sendFile(path.join(__dirname +'/public/view/index.html'));
});
app.get('/main.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/main.html'));
});
app.get('/contact.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/contact.html'));
});
app.get('/confirm.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/confirm.html'));
});

app.get('/about.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/about.html'));
});
app.get('/doctor.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/doctor.html'));
});
app.get('/service.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/service.html'));
});
app.get('/index.html',function(req,res)
{
  res.sendFile(path.join(__dirname +'/public/view/index.html'));
})
app.listen(port);
console.log("server is running on port "+port);
exports = module.exports = app;