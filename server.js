/* global __dirname */
var chalk = require('chalk');
var express = require('express');
var path = require('path');
var app = express();

var serverApi = require('./api/lib/server');

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req,res){
	res.send('index.html');
});

app.listen(3000);
serverApi.listen(3001);

console.log(chalk.blue('API listen http://localhost:3000'));
console.log(chalk.red('APP listen http://localhost:3001'));