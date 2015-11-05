var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require ('ejs');

var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public'));


//config
app.listen(3000, function(){
	console.log("Listening on 3000")
});

