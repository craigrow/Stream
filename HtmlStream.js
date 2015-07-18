// HtmlStream.js
// Stream-adventure tutorial : exercies #10

var trumpet = require('trumpet');
var fs = require('fs');
var through = require('through');
var tr = trumpet();

var stream = tr.select('.loud').createStream();

stream.pipe(through(function write(buffer)
{
	this.queue(buffer.toString().toUpperCase());
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
