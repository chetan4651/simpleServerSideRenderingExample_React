require('babel-register')({
    presets: ['react']
});

var  React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./App.jsx');

var express = require('express');
var app = express();

app.get("/",function(req,res){
	var html = ReactDOMServer.renderToString(React.createElement(App));//"<h1>Hello HTML</h1>";
	res.send(html);
});

var PORT = 3002;
app.listen(PORT,function(){
console.log("https running on "+PORT);
});