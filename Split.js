// Transform.js
// Stream-Adventure : exercie #6

var fs = require('fs');
var through = require('through2');
var split = require('split');
var concat = require('concat-stream')

var counter = 1;

stream = through(function (buffer, _, next)
{
	sData = buffer.toString();
	if (counter % 2 === 0) 
	{
		sData = sData.toUpperCase() + '\n';
	}
	else
	{
		sData = sData.toLowerCase() + '\n';
	}
	this.push(sData);
	counter += 1;
	next();
});

process.stdin.pipe(split('\n')).pipe(stream).pipe(process.stdout);