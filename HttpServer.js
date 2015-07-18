// HttpServer.js
// Stream-Adventure : exercie #7

var fs = require('fs');
var http = require('http');
var through = require('through');
var split = require('split');

var server = http.createServer(function (req, res) 
{
	var toUpperCase = through(function(buf) 
	{
		this.queue(buf.toString().toUpperCase());
	});

	if (req.method === 'POST')
	{
		req.pipe(toUpperCase).pipe(res);
	} 
	
	else
	{
		res.end('send me a POST \n');
	}
});

server.listen(process.argv[2]);
