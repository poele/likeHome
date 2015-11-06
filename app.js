var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require ('ejs');

// connection to database and testing





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

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
MongoClient.connect("mongodb://localhost:27017/likeHome", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});