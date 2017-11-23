var mongoose = require("mongoose");
var router = require('express').Router();
var blogwalla = require("./model");




	router.post("/confirm.html",function(req,res)
	{
		var newdata1 = new blogwalla();
		newdata1.fname = req.body.fname;
		newdata1.lname = req.body.lname;
		newdata1.email = req.body.email;
		newdata1.mobile = req.body.mobile
		newdata1.sex = req.body.sex;
		newdata1.date = req.body.date;
		newdata1.comment = req.body.comment;

                console.log(newdata1.fname);
                console.log(req.body.fname);
		newdata1.save(function(err)
		{
			if(err)
				res.send(err);

			console.log("sucess");
		//res.sendFile(path.join(__dirname +'/public/view/confirm.html'));
		res.redirect("http://localhost:8080/confirm.html")
		});
	});
	module.exports = router;