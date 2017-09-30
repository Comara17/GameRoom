var express 	= require('express');
var app 		= express();
var passport 	= require('passport');
var session 	= require('express-session');
var bodyParser 	= require('body-parser');
var path 		= require("path");

var port = process.env.PORT || 8080;

//Models
var models = require("./models");

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

