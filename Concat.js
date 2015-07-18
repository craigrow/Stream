// Concat.js
// Stream-Adventure : exercie #6

var fs = require('fs');
var through = require('through2');
var split = require('split');
var concat = require('concat-stream')

process.stdin
	.pipe(concat(function(buffer)
	{
		process.stdout.write(buffer.toString().split('').reverse().join(''))
		process.stdout.write('\n')
	}))

