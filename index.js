var express = require('express');
var socket  = require('socket.io');

var application = express();
var server = application.listen(5000,function(){
	console.log('Your Server Is runing at http:/localhost:5000');
});

application.use(express.static('public_html'));