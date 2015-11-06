var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require ('ejs');
var request = require('request');

// connection to database and testing

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

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

//functions
var parseData = function parseData(){
	var fileData = fs.readFileSync("./data.json", "utf8");
	return JSON.parse(fileData);
};

var saveData = function saveData(myData){
	var stringify = JSON.stringify(myData);
	fs.writeFileSync("./data.json", stringify);
};

//create the index
app.get("/", function(req, res){
	var html = fs.readFileSync("./views/index.html", "utf8");
	var myData = parseData();
	var rendered = ejs.render(html, {events : myData});
	res.send(rendered);
	res.render('index.html', {events:myData});
});

//show results

app.get("/results", function(req, res){
	console.log("results is hit");
	var parsed = parseData();
	console.log(parsed);
	// var arrObj = [];
	// parsed.events.forEach(function(event){
	// 	arrObj.push(event)
	// 	console.log('arrObj',arrObj);
	// });
		var html = fs.readFileSync("./views/results.html", "utf8");
		var rendered = ejs.render(html, {parsed: parsed});
		res.send(rendered);
});



























