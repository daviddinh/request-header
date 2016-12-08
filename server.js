'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    var response = {
        ipaddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    }
	res.send(JSON.stringify(response));
});

app.get('*',function (req, res) {
    res.redirect('/');
});

app.listen(port, function() {
	console.log('Request Header app listening on port ' + port + '!')
})
