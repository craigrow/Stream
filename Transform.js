// Transform.js
// Stream-Adventure : exercie #4

var fs = require('fs');
var through = require('through2');
var split = require('split');

var stream = through(function write(data, encoding, next) 
{
	//this.push('I got some data: ' + data + '\n');
	
	this.push(data.toString().toUpperCase());
	next();
},

function end (done) 
{
	done();
})

process.stdin.pipe(stream).pipe(process.stdout);
