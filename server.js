var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

app.listen(PORT, function(){
	console.log("App is litening on PORT " + PORT);
})
