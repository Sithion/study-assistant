var express = require('express');
var server = express();

server.get('/', function(req,res){
	res.send('Teste API');
});

module.exports = server;